import AvatarName from '../../Elements/AvatarName/AvatarName'
import { Avatars } from '../../../src/assets/Users/Contacts/Contacts'
import './ContactList.css'
import { COLORS } from '../../../styles/colors';
const userImages = [
  { id: 1, name: 'Natali Craig', img: Avatars.Natali_Craig},
  { id: 2, name: 'Drew Cano', img: Avatars.Drew_Cano },
  { id: 3, name: 'Orlando Diggs', img: Avatars.Orlando_Diggs },
  { id: 4, name: 'Andi Lane', img: Avatars.Andi_Lane },
  { id:5 , name: 'Kate Morrison', img: Avatars.Kate_Morrison },
  { id:6 , name: 'Koray Okumus', img: Avatars.Koray_Okumus},
];
function ContactList() {
  return (
    <>
    <div className='ContactList'>
        <section id="section-contacts">
            <div className="contacts-container">
              <div className="contacts-header">
                <h2 className="contacts-title" style={{color:`var(${COLORS.BLACK100})`}}>Contacts</h2>
              </div>

              {userImages.map((user) => (
              <AvatarName 
                  key={user.id}
                  name={user.name}
                  img={user.img}
              />
              ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactList