import {Menu} from "antd";
import {Link} from "react-router-dom";

export const Aside = () => {

  return (
    <div className={'aside-container'}>
      <Menu defaultSelectedKeys={['PronHub']}>
        <Menu.Item key={'PronHub'}>
          <Link to={'pronhub'} key={'PronHub'}>
            PronHub
          </Link>
        </Menu.Item>
        <Menu.Item key={'91Pron'}>
          <Link to={'91pron'} key={'91Pron'}>
            91Pron
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}
