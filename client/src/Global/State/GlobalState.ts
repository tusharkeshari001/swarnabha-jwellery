export class StateManager {
    static stateHolder: Map<string, any> = new Map();
  
    static addStateToHolder(componentname: string, componentState: any) {
      this.stateHolder.set(componentname, componentState);
    }
  
    static getStateToHolder(componentname: string) {
      return this.stateHolder.get(componentname);
    }
  
    static removeStateToHolder(componentname: string) {
      this.stateHolder.delete(componentname);
    }
  }