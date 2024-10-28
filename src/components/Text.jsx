
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeathers,sendButton,searchCountry } from '../features/weather'

const Text = () => {
const dispatch = useDispatch()
const {countryName,click}=useSelector((state)=>state.weather)
useEffect(()=>{


dispatch(fetchWeathers(countryName))



},[click,dispatch])



return (
    <div>
      <input
        type='text'
        placeholder='Use englısh '
        value={countryName}
        onChange={(e) => dispatch(searchCountry(e.target.value))}
        required
      />
      <button type='button' onClick={() => dispatch(sendButton())}>Search</button>
    </div>
  );
};

export default Text