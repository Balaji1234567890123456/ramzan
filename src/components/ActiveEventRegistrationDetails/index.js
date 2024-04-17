// Write your code here
import './index.css'

const a = {
  yetToRegister: 'YET_TO_REGISTER',
  register: 'REGISTERED',
  registerClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {kick} = props
  const RegistrationsNotDone = () => (
    <p>Click on an event ,to view its registration details</p>
  )
  const yetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
    </div>
  )
  const register = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
    </div>
  )
  const registrationClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
    </div>
  )
  const gang = () => {
    switch (kick) {
      case a.yetToRegister:
        return yetToRegister()

      case a.register:
        return register()
      case a.registerClosed:
        return registrationClosed()
      default:
        return RegistrationsNotDone()
    }
  }
  return <div>{gang()}</div>
}
export default ActiveEventRegistrationDetails
