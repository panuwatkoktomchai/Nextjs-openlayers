import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cookies = new Cookies();

const Item = (props) => {
  return (
    <div className="landing-item">
      <div className="circle-icon">
        <FontAwesomeIcon icon={ props.icon }></FontAwesomeIcon>
      </div>
      <div className="content-item">
        หน้าหลักของระบบเป็นการนาเสนอข้อมูลผ่านเส้นทาง “ปากโขง-ปากมังกร” โดยแบ่งการนาเสนอข้อมูลเป็นเมืองทั้งหมด 11 เมือง คือ กลุ่มเมืองทะวาย, กลุ่มเมืองสิงห์, กลุ่มเมืองนครปฐม- ราชบุรี, กลุ่มเมืองศรีมโหสถ-พระรถ, กลุ่มเมืองไผ่, กลุ่มเมืองยโสธรปุ ระ-หริหราลัย, กลุ่มเมืองเกาะแกร์-บากัน-สัมโบร์ไพรกุก, กลุ่มเมือง ละแวก, กลุ่มเมืองเปรยนกเกาะ, กลุ่มเดลต้าแม่น้าโขง และกลุ่มเมือง กาปอด ซึ่งใน Phase น้ีจะนาเสนอในส่วนของ “เมืองศรีมโหสถ- พระรถ” และผู้ใช้สามารถกดที่ icon หนังสือ เพื่อดู Storytelling เรื่อง Executive Summary Suvarnabhumi
      </div>
    </div>
  )
}


const LandingPage = props => {
  const [ visible, setVisible ] = useState( cookies.get('modalWelcome') ? false : true )
  const onHide = () => {
    cookies.set( 'modalWelcome','true',{ path: '/' } );
    setVisible( false )
  }
  return (
    <div>
      <Modal
        size="xl"
        show={true}
        onHide={onHide}
        centered
        style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
        className="landing"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="title">ความคาดหวังของ สทอก.</h1>
            <h5 className="title">Executive Summery Suvarnabhumi</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Item icon="trophy"></Item>
          <Item icon="archive"></Item>
        </Modal.Body>
      </Modal>
    </div>
  )
  }


export default LandingPage