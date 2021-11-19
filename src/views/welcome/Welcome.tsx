import './Welcome.scss'
import download from '../../assets/welcome/download.svg'
import bg from '../../assets/welcome/bg.png'
import icon from '../../assets/welcome/icon.svg'
import {useSpring, animated} from "react-spring";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export const Welcome = () => {

  const rightProp = useSpring({
    to: {
      y: 0
    },
    from: {
      y: -1000
    },
    delay: 500
  })

  const leftProp = useSpring({
    to: {
      y: 0
    },
    from: {
      y: 1000
    },
    delay: 500
  })

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/welcome')
    }
  })

  return (
    <div className={'login-container'} onClick={() => navigate('/download/pronhub')}>
      <img className={'bg'} src={bg} alt="bg"/>
      <div className={'left'}>
        <animated.div style={leftProp}>
          <img src={download} alt="download"/>
        </animated.div>
      </div>
      <div className={'right'}>
        <animated.div style={rightProp}>
          <img src={icon} alt="icon"/>
          <span>欢迎使用网站视频下载系统，整合各大视频网站，点击任意地方进入。</span>
        </animated.div>
      </div>
    </div>
  )
}
