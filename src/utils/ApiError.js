export class ApiError extends Error {
  constructor(
    statuCode,
    message="Something went wrong",
    error = [],
    statck = ""
  ){
    super(message)
    this.statuCode = statuCode
    this.data =null
    this.message = message
    this.success = false
    this.error = error

    if(statck){
      this.stack = statck
    }else{
      Error.captureStackTrace(this, this.constructor)
    }
  }
}