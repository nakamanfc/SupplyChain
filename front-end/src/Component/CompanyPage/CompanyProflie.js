import React, { useEffect, useState } from 'react'
import '../../Style/CompanyProfile.css'
import Avatar from '@material-ui/core/Avatar'
import { orange } from '@material-ui/core/colors';
import WebThree from '../../Function/WebThree';

function CompanyProfile({db,staffNum,workNum}) {
    return (
        <div className='companyprofile-container'>
            <div className='companyprofile-wall'/>
            <div className='companyprofile-avatar'>
                <Avatar style={{ background: orange[500], width: 180, height: 180}} src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMHpvR1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8842cdb624d68227125f7e5f8418dd13751cc85f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2RDJKaFkydG5jbTkxYm1SSklnd2pSa1pHUmtaR0Jqc0dWRG9MWlhoMFpXNTBTU0lNTXpBd2VETXdNQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e7fdcef80c9ebbfc67976b7f3c603c80163df0b0/z2077567364518_4b8d4045dd6c4232c13f3fab1161937f%20(1).jpg'>T</Avatar>
                <div style={{fontSize: 30, fontWeight: 500, color: '#535353'}}>{db.name}</div>
            </div>
            <div className='companyprofile-info'>
                <div>
                    {staffNum} Nhân Viên
                </div>
                <div>
                    Số Lượng Công Việc: {workNum}
                </div>
                <div>
                    {db.type}
                </div>
                <div>
                    {db.location}
                </div>
                <div>
                    {db.address}
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile
