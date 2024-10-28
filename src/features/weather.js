import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";







const initialState = {
countryName:"",
weatAr:[],
loading:false,
error:null,
click:false,
messagesUsers:""
}

export const fetchWeathers = createAsyncThunk(
    "country/fetchweather",
    async (countryName) => {
      const response = await fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${countryName}&sections=all&timezone=UTC&language=en&units=metric&key=rno5ai1zc9za4memc3b8s8zjz52u0spijo50uv3p`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        searchCountry: (state, action) => {
            let name = action.payload
            let capitalWord = name.charAt(0).toLowerCase() + name.slice(1)
            console.log(capitalWord)
          state.countryName = capitalWord

          
        },
      sendButton: (state) => {
        state.click =!state.click
       
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchWeathers.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchWeathers.fulfilled, (state, action) => {
        state.loading = false;
        state.countryName=""

        state.weatAr = action.payload
        console.log(state.weatAr.current)
      });
      builder.addCase(fetchWeathers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    },
  });


export const {sendButton,searchCountry}=weatherSlice.actions
export default weatherSlice.reducer