const initialState = {
  searchId: null,
  tickets: [
    {
      price: 13400, // Цена в рублях
      carrier: 'S7', // Код авиакомпании (iata)
      segments: [
        // Массив перелётов.
        {
          origin: 'MOW', // Код города (iata)
          destination: 'HKT', // Код города (iata)
          date: '10:45 – 08:00', // Дата и время вылета туда
          stops: ['HKG', 'JNB'], // Массив кодов (iata) городов с пересадками
          duration: 1275, // Общее время перелёта в минутах
        },
        {
          origin: 'HKT', // Код города (iata)
          destination: 'MOW', // Код города (iata)
          date: '11:20 – 00:50', // Дата и время вылета обратно
          stops: ['HKG'], // Массив кодов (iata) городов с пересадками
          duration: 810, // Общее время перелёта в минутах
        },
      ],
    },
    {
      price: 13700, // Цена в рублях
      carrier: 'S7', // Код авиакомпании (iata)
      segments: [
        // Массив перелётов.
        {
          origin: 'MOW', // Код города (iata)
          destination: 'HKT', // Код города (iata)
          date: '10:45 – 08:00', // Дата и время вылета туда
          stops: ['HKG', 'JNB'], // Массив кодов (iata) городов с пересадками
          duration: 1275, // Общее время перелёта в минутах
        },
        {
          origin: 'HKT', // Код города (iata)
          destination: 'MOW', // Код города (iata)
          date: '11:20 – 00:50', // Дата и время вылета обратно
          stops: ['HKG'], // Массив кодов (iata) городов с пересадками
          duration: 810, // Общее время перелёта в минутах
        },
      ],
    },
    {
      price: 13900, // Цена в рублях
      carrier: 'S7', // Код авиакомпании (iata)
      segments: [
        // Массив перелётов.
        {
          origin: 'MOW', // Код города (iata)
          destination: 'HKT', // Код города (iata)
          date: '10:45 – 08:00', // Дата и время вылета туда
          stops: ['HKG', 'JNB'], // Массив кодов (iata) городов с пересадками
          duration: 1275, // Общее время перелёта в минутах
        },
        {
          origin: 'HKT', // Код города (iata)
          destination: 'MOW', // Код города (iata)
          date: '11:20 – 00:50', // Дата и время вылета обратно
          stops: ['HKG'], // Массив кодов (iata) городов с пересадками
          duration: 810, // Общее время перелёта в минутах
        },
      ],
    },
  ],
  stopFetching: false,
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS_FETCHING':
      return {
        ...state,
        ticketsLoadingStatus: 'loading',
      };
    case 'TICKETS_FETCHED':
      return {
        ...state,
        tickets: action.payload,
        ticketsLoadingStatus: 'idle',
      };
    case 'TICKETS_FETCHING_ERROR':
      return {
        ...state,
        ticketsLoadingStatus: action.errorMessage,
      };
    default:
      return state;
  }
};

export default ticketReducer;
