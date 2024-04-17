// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onChangeId} = props
  const {id, imageUrl, name, location} = eventDetails
  const y = () => {
    onChangeId(id)
  }
  return (
    <div>
      <img src={imageUrl} alt={name} onClick={y} className="img" />
      <h1>{name}</h1>
      <p>{location}</p>
    </div>
  )
}
export default EventItem
