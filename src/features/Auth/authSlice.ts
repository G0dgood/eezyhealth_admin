import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
 
  


 

const initialState = { 

  user:   null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  userToken:null,
  message: '',
  error: '',

  data:   [],
  isErrorinput: false,
  isSuccessinput: false,
  isLoadinginput: false,
  userTokeninput:null,
  messageinput: '',
  errorinput: '', 

 
 
}
 

// Login user
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    return await authService.login()

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message ||
      error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})


 
 


 
 

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {  
      
      
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = '' 

    },
    setUserInfo: (state, action) => {
     state.user = action.payload
    },

     logout: state => {
      localStorage.removeItem('eezy-user-info')
      state.user = null
    }
  },

  extraReducers: (builder) => {
    builder 
      //  Login
      .addCase(login.pending, (state) => {
        state.isLoading = true 
      }) 
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload 
      }) 
      .addCase(login.rejected, (state:any, action) => {
        state.isLoading  = false
        state.isError  = true
        state.message  = action.payload
        state.data  = [] 
      })

       
      
  },
})

export const { reset  ,setUserInfo ,logout} = authSlice.actions
export default authSlice.reducer