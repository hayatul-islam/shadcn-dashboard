export const status: Array<string> = [
    "Completed",
    "Upcoming",
    "In Progress",
    "Canceled",
  ];

  interface TripData {
    id: number;
    driver: string;
    status: string;
    pick_address: string;
    drop_address: string;
    pickup: string;
    appointment_time: string;
    drop_time: string;
    account_name: string;
    patient_name: string;
    miles: string;
    vehicle_type: string;
  }

 export const tripData:TripData[]  = [
  {
    id: 1,
    driver: "John Smith",
    status: "Completed",
    pick_address: "781 Hilll Junctions Apt. 411",
    drop_address: "781 Hilll Junctions Apt. 411",
    pickup: "04:12 PM",
    appointment_time: "05:30 PM",
    drop_time: "08:12 PM",
    account_name: "Colorado Department of Health Care Policy...",
    patient_name: "John Smith",
    miles: "84.15",
    vehicle_type: "Van"
  },
  {
    id:2 ,
    driver: "John Smith",
    status: "Upcoming",
    pick_address: "781 Hilll Junctions Apt. 411",
    drop_address: "781 Hilll Junctions Apt. 411",
    pickup: "04:12 PM",
    appointment_time: "05:30 PM",
    drop_time: "08:12 PM",
    account_name: "Colorado Department of Health Care Policy...",
    patient_name: "John Smith",
    miles: "84.15",
    vehicle_type: "Van"
  },
  {
    id: 3,
    driver: "John Smith",
    status: "In Progress",
    pick_address: "781 Hilll Junctions Apt. 411",
    drop_address: "781 Hilll Junctions Apt. 411",
    pickup: "04:12 PM",
    appointment_time: "05:30 PM",
    drop_time: "08:12 PM",
    account_name: "Colorado Department of Health Care Policy...",
    patient_name: "John Smith",
    miles: "84.15",
    vehicle_type: "Van"
  },
  {
    id: 4,
    driver: "John Smith",
    status: "Canceled",
    pick_address: "781 Hilll Junctions Apt. 411",
    drop_address: "781 Hilll Junctions Apt. 411",
    pickup: "04:12 PM",
    appointment_time: "05:30 PM",
    drop_time: "08:12 PM",
    account_name: "Colorado Department of Health Care Policy...",
    patient_name: "John Smith",
    miles: "84.15",
    vehicle_type: "Van"
  },
  {
    id: 5,
    driver: "John Smith",
    status: "Scheduled",
    pick_address: "781 Hilll Junctions Apt. 411",
    drop_address: "781 Hilll Junctions Apt. 411",
    pickup: "04:12 PM",
    appointment_time: "05:30 PM",
    drop_time: "08:12 PM",
    account_name: "Colorado Department of Health Care Policy...",
    patient_name: "John Smith",
    miles: "84.15",
    vehicle_type: "Van"
  },
  {
    id:6 ,
    driver: "John Smith",
    status: "Completed",
    pick_address: "781 Hilll Junctions Apt. 411",
    drop_address: "781 Hilll Junctions Apt. 411",
    pickup: "04:12 PM",
    appointment_time: "05:30 PM",
    drop_time: "08:12 PM",
    account_name: "Colorado Department of Health Care Policy...",
    patient_name: "John Smith",
    miles: "84.15",
    vehicle_type: "Van"
  },
  {
    id:7 ,
    driver: "John Smith",
    status: "Completed",
    pick_address: "781 Hilll Junctions Apt. 411",
    drop_address: "781 Hilll Junctions Apt. 411",
    pickup: "04:12 PM",
    appointment_time: "05:30 PM",
    drop_time: "08:12 PM",
    account_name: "Colorado Department of Health Care Policy...",
    patient_name: "John Smith",
    miles: "84.15",
    vehicle_type: "Van"
  },
 ]
