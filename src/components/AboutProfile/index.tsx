import { AiFillGithub } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { AboutProfileContainer, AboutTheProfileContainer, ProfileContainer, ProfileHighlightsContainer } from "./styles";
import avatar from '../../assets/avatar.png'

interface ProfileResponseProps {
  profileResponse: () => void;
}

export function AboutProfile(){
  return(
    <AboutProfileContainer>
      <ProfileContainer>
        <img src={avatar}/>
        <AboutTheProfileContainer>
          <h1>Cameron Williamson</h1>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
          <ProfileHighlightsContainer>
            <div>
              <AiFillGithub />
              <p>cameronwll</p>
            </div>
            <div>
              <FaBuilding/>
              <p> Rocketseat</p>
            </div>
            <div>
              <BsFillPeopleFill/>
              <p>32 seguidores</p>
            </div>
          </ProfileHighlightsContainer>
        </AboutTheProfileContainer>
      </ProfileContainer>
    </AboutProfileContainer>
   
  )
}