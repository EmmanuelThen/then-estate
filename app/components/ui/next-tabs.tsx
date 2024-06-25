import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";


type Props = {}

const NextTabs = ({ tabOneContent, tabTwoContent, tabOneTitle, tabTwoTitle, tabOneClick, tabTwoClick }: any) => {
  return (
    <div className="flex w-full flex-col">
      <Tabs color="primary" aria-label="Options">
        <Tab className="text-white" key="portfolio" title={tabOneTitle} onClick={tabOneClick}>
          <Card>
            <CardBody className="text-black">
              {tabOneContent}
            </CardBody>
          </Card>
        </Tab>
        <Tab className="text-white" key="watchlist" title={tabTwoTitle} onClick={tabTwoClick}>
          <Card>
            <CardBody>
              {tabTwoContent}
            </CardBody>
          </Card>
        </Tab>

      </Tabs>
    </div>
  )
}

export default NextTabs