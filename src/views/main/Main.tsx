import './Main.scss'
import {Layout} from "antd";
import {Aside} from "../../components/aside/Aside";
import {Outlet} from "react-router-dom";

const { Sider, Content } = Layout

export const Main = () => {
  return (
    <Layout className={'height-full'}>
      <Sider className={'height-full aside-background-color'}>
        <Aside />
      </Sider>
      <Content className={'height-full'}>
        <Outlet />
      </Content>
    </Layout>
  )
}
