
export interface IempProject {
    id:               number;
    title:            string;
    description:      string;
    creationDate:     Date;
    modificationDate: Date;
    task:             Task[];
}

export interface Task {
    id:               number;
    title:            string;
    description:      string;
    status:           string;
    creationDate:     Date;
    modificationDate: Date;
    employee:         Employee;
    
}

export interface Employee {
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

