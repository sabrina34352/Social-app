export class ApiErrors extends Error {
  status;
  errors;
  constructor(status, msg, errors = []) {
    super(msg);
    this.status = status;
    this.errors = errors;
  }
  static UnathorisedError() {
    return new ApiErrors(401, 'user is not authorized');
  }
  static BadRequest(msg, errors = []) {
    return new ApiErrors(400, msg, errors);
  }
}

//middleware
export function ErrorDetected(err, req, res, next) {
  console.log(err);
  if (err instanceof ApiErrors) {
    return res
      .status(err.status)
      .send({ message: err.message, error: err.errors });
  }
  return res.status(500).send('Something went wrong!, ');
}
