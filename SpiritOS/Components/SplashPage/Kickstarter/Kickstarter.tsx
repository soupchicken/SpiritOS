import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'
import ReactSVG from 'react-svg'

interface Props {}
interface State {}

class Kickstarter extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <__.Kickstarter>
        <__.Header>
          <__.Title>Build Community Projects</__.Title>
          <__.Subtitle>Work together to bring your best ideas to life</__.Subtitle>
        </__.Header>
        <__.Proposal>
          <__.Body>
            <__.Video>
              <__.Info>
                <__.Label>Make Something Awesome</__.Label>
                <__.Text>
                  Contribute to larger projects that dramatically impact your community
                </__.Text>
              </__.Info>
              <__.Preview src="images/video-preview.jpg" />
            </__.Video>
            <__.Team>
              <__.TeamHeader>The Team</__.TeamHeader>
              <__.TeamMembers>
                <__.TeamMember>
                <__.TeamMemberPortrait src="images/portraits/man-black.png"/>
                <__.TeamMemberBio>
                  <__.TeamMemberBioText />
                  <__.TeamMemberBioText />
                </__.TeamMemberBio>
                </__.TeamMember>
                <__.TeamMember>
                  <__.TeamMemberPortrait src="images/portraits/girl-white2.png"/>
                  <__.TeamMemberBio>
                    <__.TeamMemberBioText />
                    <__.TeamMemberBioText />
                  </__.TeamMemberBio>
                </__.TeamMember>
                <__.TeamMember>
                  <__.TeamMemberPortrait src="images/portraits/man-white-beard.png"/>
                  <__.TeamMemberBio>
                    <__.TeamMemberBioText />
                    <__.TeamMemberBioText />
                  </__.TeamMemberBio>
                </__.TeamMember>
                <__.TeamMember>
                  <__.TeamMemberPortrait src="images/portraits/man-blonde.png"/>
                  <__.TeamMemberBio>
                    <__.TeamMemberBioText />
                    <__.TeamMemberBioText />
                  </__.TeamMemberBio>
                </__.TeamMember>
                <__.TeamMember>
                  <__.TeamMemberPortrait src="images/portraits/girl-hispanic.png"/>
                  <__.TeamMemberBio>
                    <__.TeamMemberBioText />
                    <__.TeamMemberBioText />
                  </__.TeamMemberBio>
                </__.TeamMember>
              </__.TeamMembers>
            </__.Team>
          </__.Body>
          <__.Sidebar>
            <__.Tracker>
              <__.Progress>
                <ReactSVG src="images/LOVE.svg" />
                <__.Raised>43,523</__.Raised>
                of
                <__.Target>60,000</__.Target>
              </__.Progress>
              <__.ProgressBar></__.ProgressBar>
              <__.ProgressDetails>Raised by 311 people in 3 days</__.ProgressDetails>
            </__.Tracker>
            <__.SidebarText>
              <__.TextRow />
              <__.TextRow />
              <__.TextRow style={{ width:`63%` }} />
            </__.SidebarText>
            <__.Contributors>
              <__.ContributorHeader>
                Top Contributors
              </__.ContributorHeader>
              <__.Winners>
                <__.FirstPlace>
                  <__.FirstPlaceTrophy src="images/trophy-gold.png" />
                  <__.FirstPlacePortrait src="images/portraits/man-white-redhead.png" />
                  <__.FirstPlaceBio>
                    <__.FirstPlaceBioText />
                    <__.FirstPlaceBioText style={{ width:`65%` }} />
                  </__.FirstPlaceBio>
                </__.FirstPlace>
                <__.RunnersUp>
                  <__.RunnerUp>
                    <__.RunnerUpTrophy src="images/trophy-silver.png" />
                    <__.RunnerUpPortrait src="images/portraits/girl-old.png" />
                    <__.RunnerUpBio>
                      <__.RunnerUpBioText />
                      <__.RunnerUpBioText style={{ width:`52%` }} />
                    </__.RunnerUpBio>
                  </__.RunnerUp>
                  <__.RunnerUp>
                    <__.RunnerUpTrophy src="images/trophy-bronze.png" />
                    <__.RunnerUpPortrait src="images/portraits/girl-black.png" />
                    <__.RunnerUpBio>
                      <__.RunnerUpBioText />
                      <__.RunnerUpBioText style={{ width:`81%` }} />
                    </__.RunnerUpBio>
                  </__.RunnerUp>
                </__.RunnersUp>
              </__.Winners>
            </__.Contributors>
          </__.Sidebar>
        </__.Proposal>
      </__.Kickstarter>
    )
  }
}

export default Kickstarter;
