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
    fp1: string
    fp2?: string
    fp3?: string
    qualifying: string
    gp: string
    sprintQualifying?: string
    sprint?: string
  }