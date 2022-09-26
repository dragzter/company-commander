import { SaveObjects } from "../types/enums";
import { Company, Soldier, CompanyStats, SoldierRank, SupportTeam } from "../types/unit-types";
import { COMPANY_TEAMS } from "./constants";

export class CompanyController {
  soldiers: Soldier[] = [];
  MEM_LOADER = {} as MemoryLoader;
  memoryKeySoldiers = SaveObjects.SOLDIERS;
  memoryKeyCompany = SaveObjects.COMPANY;
  memoryKeyMissions = SaveObjects.MISSIONS;
  memoryKeyBattles = SaveObjects.BATTLES;
  memoryKeyCommander = SaveObjects.COMPANY_COMMANDER;
  memoryKeyKIA = SaveObjects.KIA;
  memoryKeyTeams = SaveObjects.SUPPORT_TEAMS;
  company = {} as Company;
  commander = {} as Soldier;
  kia = [] as Soldier[];
  battles = 0;
  teams = [] as SupportTeam[];
  constructor() {
    this._init();
  }

  private _init() {
    this.MEM_LOADER = new MemoryLoader();
    this.soldiers = this._getSoldiers();
    this.company = this._getCompany();
    this.commander = this._getCompanyCommander();
    this.kia = this._getKIA();
    this.battles = this._getBattles();
    this.teams = this._getTeams();
  }

  private _getSoldiers(): Soldier[] {
    if (this._checkMemory(this.memoryKeySoldiers)) {
      return this.MEM_LOADER.loadGameObject(this.memoryKeySoldiers);
    }
    return [] as Soldier[];
  }

  private _getCompany(): Company {
    if (this._checkMemory(this.memoryKeyCompany)) {
      return this.MEM_LOADER.loadGameObject(this.memoryKeyCompany);
    }
    return {} as Company;
  }

  private _getKIA(): Soldier[] {
    if (this._checkMemory(this.memoryKeyKIA)) {
      return this.MEM_LOADER.loadGameObject(this.memoryKeyKIA);
    }
    return [] as Soldier[];
  }

  private _getCompanyCommander(): Soldier {
    if (this._checkMemory(this.memoryKeyCommander)) {
      return this.MEM_LOADER.loadGameObject(this.memoryKeyCommander);
    }
    return {} as Soldier;
  }

  private _getBattles(): number {
    if (this._checkMemory(this.memoryKeyBattles)) {
      return this.MEM_LOADER.loadGameObject(this.memoryKeyBattles);
    }
    return 0;
  }

  private _getTeams() {
    if (this._checkMemory(this.memoryKeyTeams)) {
      return this.MEM_LOADER.loadGameObject(this.memoryKeyTeams);
    }
    return [];
  }

  private _checkMemory(key: string) {
    return this.MEM_LOADER.itemInStorage(key);
  }

  public get allSoldiers(): Soldier[] {
    return this.soldiers;
  }

  public get allTeams(): SupportTeam[] {
    return this.teams;
  }

  public get allKIA(): Soldier[] {
    return this.kia;
  }

  public get fullCompany(): Company {
    return this.company;
  }

  public get companyCommander(): Soldier {
    return this.commander;
  }

  public get companyBattles(): number {
    return this.battles;
  }

  public getSoldierById(id: string): Soldier {
    return this.soldiers.find((soldier) => soldier.id === id) as Soldier;
  }

  public getSoldierByName(soldierName: string): Soldier {
    return this.soldiers.find((soldier) => soldier.name === soldierName) as Soldier;
  }

  public getSoldiersByRank(rank: SoldierRank): Soldier[] {
    return this.soldiers.filter((soldier) => soldier.rank === rank);
  }

  public getCompanyInformation(): CompanyStats {
    return {
      count: this.soldiers.length,
      commander: this.commander,
      teams: this.teams,
      battles: this.battles,
      kia: this.kia,
    };
  }
}

export class MemoryInserter {
  company = {} as Company;
  commandTeam = {} as SupportTeam;
  companyTeams = [] as SupportTeam[];
  soldiers = [] as Soldier[];

  memoryDirectory: { [key: string]: any } = {
    [SaveObjects.COMPANY]: function (ctx: MemoryInserter, key: string, obj: Company) {
      ctx.company = obj;
      ctx.commandTeam = ctx.company.commandTeam as SupportTeam;
      ctx.companyTeams = COMPANY_TEAMS.filter((team) => {
        return Object.keys(obj).includes(team);
      }).map((team) => {
        return ctx.company[team as keyof Company];
      }) as SupportTeam[];
      ctx._save(key, obj);
      ctx._saveCommandTeam();
      ctx._saveCompanyCommander();
      ctx._saveTeams();
      ctx._saveSoldiers();
    },
    [SaveObjects.SOLDIERS]: function (ctx: MemoryInserter, key: string, obj: any) {
      ctx._saveSoldiers();
    },
    [SaveObjects.COMMAND_TEAM]: function (ctx: MemoryInserter, key: string, obj: any) {
      // TODO ?
    },
    [SaveObjects.KIA]: function (ctx: MemoryInserter, key: string, obj: any) {
      ctx._save(key, obj);
    },
    [SaveObjects.BATTLES]: SaveObjects.BATTLES,
    [SaveObjects.MISSIONS]: SaveObjects.MISSIONS,
    [SaveObjects.REWARD_MOD]: SaveObjects.REWARD_MOD,
    [SaveObjects.COMPLETED_MISSIONS]: SaveObjects.COMPLETED_MISSIONS,
    [SaveObjects.SUPPORT_TEAMS]: SaveObjects.SUPPORT_TEAMS,
  };
  public saveGameObject(key: string, obj: { [key: string]: any }) {
    this.memoryDirectory[key](this, key, obj);
  }

  public mergeGameObjects() {
    // TODO invoke _merge
  }

  private _save(key: string, obj: any) {
    (window as Window).localStorage.setItem(key, JSON.stringify(obj));
  }

  private _merge() {
    // TODO merge objects before storing them into locaStorage
  }

  private _saveCommandTeam() {
    if (!this.company) {
      throw console.error("There is no Company from which to save a command team.");
    }

    this._save(SaveObjects.COMMAND_TEAM, this.commandTeam);
  }

  private _saveCompanyCommander() {
    if (!this.company?.commandTeam) {
      throw console.error("There is no Company from which to save a commander.");
    }

    this._save(SaveObjects.COMPANY_COMMANDER, this.commandTeam.leader);
  }

  private _saveTeams() {
    if (!this.companyTeams) {
      throw console.error("There are no teams to save.");
    }

    this._save(SaveObjects.SUPPORT_TEAMS, this.companyTeams);
  }

  private _saveSoldiers() {
    if (!this.company && !this.companyTeams?.length) {
      throw console.error("There is no company from which to record soldiers.");
    }

    this.companyTeams.forEach((team) => {
      this.soldiers.push(...([team.leader, team.assistant, ...team.crew] as Soldier[]));
    });
    this.soldiers.push(...this.company.infantry);
    this._save(SaveObjects.SOLDIERS, this.soldiers);
  }
}

export class MemoryLoader extends MemoryInserter {
  constructor() {
    super();
  }

  public loadGameObject(key: any) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  public itemInStorage(key: string) {
    return localStorage.getItem(key) ? true : false;
  }

  public eraseGameObject(key: string) {
    localStorage.removeItem(key);
  }
}
