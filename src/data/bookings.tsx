export interface customerInterface{
  nDoc: string,
  name: string,
  phone: string,
  email: string
}
export interface bookingInterface{
  id: string,
  tour: string,
  nTravelers: number,
  bookingDate: string,
  tourDate: string,
  customer: customerInterface,
  state: string
}

export const bookings = [
  {
    id: '1',
    tour: 'Cusco',
    nTravelers: 4,
    bookingDate: '2022/05/2',
    tourDate: '2022/08/20',
    customer: {
      nDoc: '1234',
      name: 'Will A. M',
      phone: '+19999192',
      email: 'willam@gmail.com',
    },
    state: 'finalizado'
  },
  {
    id: '2',
    tour: 'Machupicchu',
    nTravelers: 3,
    bookingDate: '2022/06/20',
    tourDate: '2022/08/20',
    customer: {
      nDoc: '1235',
      name: 'Elizabeth',
      phone: '+19999192',
      email: 'willam@gmail.com',
    },
    state: 'finalizado'
  },
  {
    id: '3',
    tour: 'Manu',
    nTravelers: 1,
    bookingDate: '2022/06/20',
    tourDate: '2022/09/21',
    customer: {
      nDoc: '1236',
      name: 'Albus',
      phone: '+19999192',
      email: 'willam@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '4',
    tour: 'Manu',
    nTravelers: 1,
    bookingDate: '2022/06/20',
    tourDate: '2022/09/21',
    customer: {
      nDoc: '1237',
      name: 'Grind',
      phone: '+19999192',
      email: 'willam@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '5',
    tour: 'Manu',
    nTravelers: 1,
    bookingDate: '2022/06/20',
    tourDate: '2022/09/21',
    customer: {
      nDoc: '1238',
      name: 'Newt',
      phone: '+19999192',
      email: 'newt@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '6',
    tour: 'Humantay',
    nTravelers: 2,
    bookingDate: '2022/06/20',
    tourDate: '2022/09/15',
    customer: {
      nDoc: '1239',
      name: 'Frodo',
      phone: '+19999192',
      email: 'bolson@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '7',
    tour: 'Humantay',
    nTravelers: 1,
    bookingDate: '2022/06/20',
    tourDate: '2022/09/15',
    customer: {
      nDoc: '1240',
      name: 'Smeagol',
      phone: '+19999192',
      email: 'miprecioso@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '8',
    tour: 'Machupicchu',
    nTravelers: 3,
    bookingDate: '2022/06/20',
    tourDate: '2022/09/20',
    customer: {
      nDoc: '1241',
      name: 'Aragorn',
      phone: '+19999192',
      email: 'araghunters@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '9',
    tour: 'Cusco',
    nTravelers: 1,
    bookingDate: '2022/05/20',
    tourDate: '2022/09/10',
    customer: {
      nDoc: '1242',
      name: 'Avicii',
      phone: '+19999192',
      email: 'avicii@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '10',
    tour: 'Cusco',
    nTravelers: 1,
    bookingDate: '2022/05/21',
    tourDate: '2022/09/11',
    customer: {
      nDoc: '1243',
      name: 'Mike',
      phone: '+19999192',
      email: 'posner@gmail.com',
    },
    state: 'cancelado'
  },
  {
    id: '11',
    tour: 'Tambopata',
    nTravelers: 2,
    bookingDate: '2022/07/12',
    tourDate: '2022/10/01',
    customer: {
      nDoc: '1244',
      name: 'Martin',
      phone: '+19999192',
      email: 'garrix@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '12',
    tour: 'Machupicchu',
    nTravelers: 4,
    bookingDate: '2022/07/10',
    tourDate: '2022/10/12',
    customer: {
      nDoc: '1245',
      name: 'Sonny',
      phone: '+19999192',
      email: 'skrillex@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '13',
    tour: 'Machupicchu',
    nTravelers: 1,
    bookingDate: '2022/07/28',
    tourDate: '2022/11/01',
    customer: {
      nDoc: '1244',
      name: 'Martin',
      phone: '+19999192',
      email: 'garrix@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '14',
    tour: 'Machupicchu',
    nTravelers: 1,
    bookingDate: '2022/06/28',
    tourDate: '2022/11/01',
    customer: {
      nDoc: '1247',
      name: 'David',
      phone: '+19999192',
      email: 'gueta@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '15',
    tour: 'Tambopata',
    nTravelers: 1,
    bookingDate: '2022/07/24',
    tourDate: '2022/10/01',
    customer: {
      nDoc: '1248',
      name: 'Kygo',
      phone: '+19999192',
      email: 'kygo@gmail.com',
    },
    state: 'pendiente'
  },
  {
    id: '16',
    tour: 'Manu',
    nTravelers: 1,
    bookingDate: '2022/07/2',
    tourDate: '2022/10/02',
    customer: {
      nDoc: '1234',
      name: 'Will A. M',
      phone: '+19999192',
      email: 'willam@gmail.com',
    },
    state: 'pendiente'
  },
]