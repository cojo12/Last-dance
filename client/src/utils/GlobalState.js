import React, { createContext, useReducer, useContext } from "react";
import {
  Update_Itinerary,
  Set_Current_Itinerary,
  Add_Itinerary,
  Loading,
  Add_Favorite,
  Remove_Favorite,
  Update_Favorites
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case Set_Current_Itinerary:
      return {
        ...state,
        currentItinerary: action.post,
        loading: false
      };

      case Update_Itinerary:
        return {
          ...state,
          itineraries: [...action.itineraries],
          loading: false
        };
      
      case Add_Itinerary:
        return {
          ...state,
          itineraries: [action.itinerary, ...state.itineraries]
        }

      case Add_Favorite:
        return {
          ...state,
          favorites: [action.itinerary, ...state.favorites],
          loading: false
        };

      case Update_Favorites:
        return {
          ...state,
          favorites: [...state.favorites],
          loading: false
        };

      case Remove_Favorite:
        return {
          ...state,
          favorites: state.favorites.filter((itinerary) => {
            return itinerary._id !== action._id; 
          })
        };
      
      case Loading:
        return {
          ...state,
          loading: true
        };
      
      default:
        return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    itineraries: [],
    currentItinerary: {
      _id: 0,
      itineraryName: "",
      country: "",
      city: "",
      state: "",
      zip: 0,
      entertainment: "",
      suggestions: "",
      cost: 0,
      description: "",
      events: []
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export {StoreProvider, useStoreContext};