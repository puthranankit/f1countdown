export interface Race {
    name: string
    location: string
    latitude: number
    longitude: number
    round: number
    slug: string
    localeKey: string
    sessions: Sessions
  }
  
  export interface Sessions {
    fp1: Date
    fp2?: Date
    fp3?: Date
    qualifying: Date
    gp: Date
    sprintQualifying?: Date
    sprint?: Date
  }