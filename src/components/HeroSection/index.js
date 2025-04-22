import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton, ButtonGroup } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ButtonGroup>
                          <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                          <ResumeButton 
                            href="https://drive.usercontent.google.com/download?id=1pa6py4_-7cfws3sJEySZt1fWEExIRC07&export=download&authuser=0&confirm=t&uuid=04499455-9149-4d64-b964-477734fbd616&at=APcmpowP3S3-zEXAVm7-4pEvdZGr:1745345346898" 
                            target='_blank' 
                            rel="noopener noreferrer"
                          >
                            Detailed Experiences
                          </ResumeButton>
                          <ResumeButton 
                            href="https://drive.usercontent.google.com/download?id=19hn1clMm4zi0hC2xrDYrmkHfc1CSBaXt&export=download&authuser=0&confirm=t&uuid=3f1f8310-ea7a-4b4a-8ff6-9cdca6ac5644&at=APcmpoz4PaSW-kvFESTiGiUppJxW:1745345353641" 
                            target='_blank' 
                            rel="noopener noreferrer"
                          >
                            Detailed Projects
                          </ResumeButton>
                        </ButtonGroup>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection