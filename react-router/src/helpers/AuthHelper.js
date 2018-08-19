// fake auth taken from official react-router docs:
// https://reacttraining.com/react-router/web/example/auth-workflow
const authHelper = {
  isAuthenticated: false,
  authenticate(cb) { // jako argument należy przekzać funkcję (callback), która zostanie wywołana w funkcji setTimeout
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

export default authHelper;