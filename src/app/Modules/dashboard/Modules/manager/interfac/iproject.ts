export interface Iproject {
    isData: any;
        id:               number;
        title:            string;
        description:      string;
        creationDate:     Date;
        modificationDate: Date;
        manager:          Manager;
      }
      
      export interface Manager {
        id:               number;
        userName:         string;
        imagePath:        null;
        email:            string;
        password:         string;
        country:          string;
        phoneNumber:      string;
        verificationCode: string;
        isVerified:       boolean;
        isActivated:      boolean;
        creationDate:     Date;
        modificationDate: Date;
      }
      