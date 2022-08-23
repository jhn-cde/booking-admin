export interface customerInterface{
  nDoc: string,
  name: string,
  phone: string,
  email: string
}
export interface bookingInterface{
  id: string,
  tour: string,
  nTravelers: string,
  bookingDate: string,
  tourDate: string,
  customer: customerInterface,
  state: string
}

export interface stateInterface{
  name: string,
  color: string
}

export interface tourInterface{
  name: string
}

export const initialStates = [
  {name:'Pendiente', color:'#feb500'},
  {name: 'Finalizado',color:'#198754'},
  {name:'Cancelado', color:'#8B008B'}]

export const initialTours = [
  {name: 'Manu'}, {name: 'Tambopata'}, {name: 'Machupicchu'},
  {name: 'Humantay'}, {name: 'Cusco'}]

export const bookings = [
  {
    id: '1',
    tour: 'Cusco',
    nTravelers: '4',
    bookingDate: '2022/05/2',
    tourDate: '2022/08/20',
    customer: {
      nDoc: '1234',
      name: 'Will A. M',
      phone: '+19999192',
      email: 'willam@gmail.com',
    },
    state: 'Finalizado'
  },
  {
    id: '2',
    tour: 'Machupicchu',
    nTravelers: '3',
    bookingDate: '2022/06/20',
    tourDate: '2022/08/20',
    customer: {
      nDoc: '1235',
      name: 'Elizabeth',
      phone: '+19999192',
      email: 'willam@gmail.com',
    },
    state: 'Finalizado'
  },
  {
    id: '3',
    tour: 'Manu',
    nTravelers: '1',
    bookingDate: '2022/06/20',
    tourDate: '2022/09/21',
    customer: {
      nDoc: '1236',
      name: 'Albus',
      phone: '+19999192',
      email: 'willam@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '4',
    tour: 'Manu',
    nTravelers: '1',
    bookingDate: '2022/06/20',
    tourDate: '2022/09/21',
    customer: {
      nDoc: '1237',
      name: 'Grind',
      phone: '+19999192',
      email: 'willam@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '5',
    tour: 'Manu',
    nTravelers: '1',
    bookingDate: '2022/06/20',
    tourDate: '2022/09/21',
    customer: {
      nDoc: '1238',
      name: 'Newt',
      phone: '+19999192',
      email: 'newt@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '6',
    tour: 'Humantay',
    nTravelers: '2',
    bookingDate: '2022/06/20',
    tourDate: '2022/09/15',
    customer: {
      nDoc: '1239',
      name: 'Frodo',
      phone: '+19999192',
      email: 'bolson@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '7',
    tour: 'Humantay',
    nTravelers: '1',
    bookingDate: '2022/06/20',
    tourDate: '2022/09/15',
    customer: {
      nDoc: '1240',
      name: 'Smeagol',
      phone: '+19999192',
      email: 'miprecioso@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '8',
    tour: 'Machupicchu',
    nTravelers: '3',
    bookingDate: '2022/06/20',
    tourDate: '2022/09/20',
    customer: {
      nDoc: '1241',
      name: 'Aragorn',
      phone: '+19999192',
      email: 'araghunters@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '9',
    tour: 'Cusco',
    nTravelers: '1',
    bookingDate: '2022/05/20',
    tourDate: '2022/09/10',
    customer: {
      nDoc: '1242',
      name: 'Avicii',
      phone: '+19999192',
      email: 'avicii@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '10',
    tour: 'Cusco',
    nTravelers: '1',
    bookingDate: '2022/05/21',
    tourDate: '2022/09/11',
    customer: {
      nDoc: '1243',
      name: 'Mike',
      phone: '+19999192',
      email: 'posner@gmail.com',
    },
    state: 'Cancelado'
  },
  {
    id: '11',
    tour: 'Tambopata',
    nTravelers: '2',
    bookingDate: '2022/07/12',
    tourDate: '2022/10/01',
    customer: {
      nDoc: '1244',
      name: 'Martin',
      phone: '+19999192',
      email: 'garrix@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '12',
    tour: 'Machupicchu',
    nTravelers: '4',
    bookingDate: '2022/07/10',
    tourDate: '2022/10/12',
    customer: {
      nDoc: '1245',
      name: 'Sonny',
      phone: '+19999192',
      email: 'skrillex@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '13',
    tour: 'Machupicchu',
    nTravelers: '1',
    bookingDate: '2022/07/28',
    tourDate: '2022/11/01',
    customer: {
      nDoc: '1244',
      name: 'Martin',
      phone: '+19999192',
      email: 'garrix@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '14',
    tour: 'Machupicchu',
    nTravelers: '1',
    bookingDate: '2022/06/28',
    tourDate: '2022/11/01',
    customer: {
      nDoc: '1247',
      name: 'David',
      phone: '+19999192',
      email: 'gueta@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '15',
    tour: 'Tambopata',
    nTravelers: '1',
    bookingDate: '2022/07/24',
    tourDate: '2022/10/01',
    customer: {
      nDoc: '1248',
      name: 'Kygo',
      phone: '+19999192',
      email: 'kygo@gmail.com',
    },
    state: 'Pendiente'
  },
  {
    id: '16',
    tour: 'Manu',
    nTravelers: '1',
    bookingDate: '2022/07/2',
    tourDate: '2022/10/02',
    customer: {
      nDoc: '1234',
      name: 'Will A. M',
      phone: '+19999192',
      email: 'willam@gmail.com',
    },
    state: 'Pendiente'
  },
]