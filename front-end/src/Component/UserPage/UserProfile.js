import React from 'react'
import '../../Style/UserProfile.css'
import Avatar from '@material-ui/core/Avatar'
import { blue, green, orange } from '@material-ui/core/colors';

function UserProfile({db,staffCompany}) {
    return (
        <div className='userprofile-container'>
            <div className='userprofile-wall'/>
            <div className='userprofile-avatar'>
                <Avatar style={{ background: orange[500], width: 180, height: 180}} src='https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/217872521_189414133236250_5435830389659971873_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=XGDIVjRogmYAX_I5RSE&_nc_ht=scontent.fhan2-1.fna&oh=0b52d1bd0b3e3e02e7ec7e682ef4947b&oe=6119409A'>H</Avatar>
                <div style={{fontSize: 30, fontWeight: 500, color: '#535353'}}>{db.name}</div>
            </div>
            <div className='userprofile-info'>
                <div>
                    20 Tuổi
                </div>
                <div>
                    {db.positon}
                </div>
                <div>
                    {staffCompany.name}
                </div>
                <div>
                    Số Lượng Công Việc: 4
                </div>
                <div>
                    {db.address}
                </div>
            </div>
        </div>
    )
}

export default UserProfile
