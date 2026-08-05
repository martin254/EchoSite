import logo from './logo.svg'
import arrow_icon from './arrow_icon.svg'
import group_profile from './Group2.png'
import bgImage1 from './bgImage1.png'
import menu_icon from './menu_icon.svg'
import close_icon from './close_icon.svg'
import work_mobile_app from './work_mobile_app.png'
import work_dashboard_management from './work_dashboard_management.png'
import email_icon from './email_icon.svg'
import person_icon from './person_icon.svg'
import facebook_icon from './facebook_icon.svg'
import twitter_icon from './twitter_icon.svg'
import instagram_icon from './instagram_icon.svg'
import linkedin_icon from './linkedin_icon.svg'
import logo_dark from './logo_dark.svg'
import menu_icon_dark from './menu_icon_dark.svg'
import sun_icon from './sun_icon.svg'
import moon_icon from './moon_icon.svg'
import gdihub from './gdihub.svg'
import strathlogo from './Strathmore-University-Logo.png'
import senseshub from './senseshub.jpg'
import Neema from './Neema.jpeg'
import simulizi from './simulizi.png'
import ruth from './Ruth.jpg'
import njauprof from './njauprof.jpg'
import daisy from './Daisy.jpg'
import sheila from './Sheila.jpg'
import TwiProf from './TwiProf.png'
import echohero from './Echohero.png'
import gdidark from './gdihubdark.svg'
import strathdark from './strathdarkness.png'
import cdlilight from './cdlilogo.svg'
import sautilogo from './ISRIforDark.png'
import sautilight from './ISRIforLightbg.png'
import AITutor from './AITutor.png'
import echo2 from './Echo2.png'
import echologo2 from './echologo2.png'
import dictationStudio from './DictStudio.png'
import UOB from './UOBLogo.jpg'
import BegiLawOffices from './BegiLawOffices.jpg'
import modalLogo from './modal.jpg'

export const audioExamples = {
  user1: {
    label: "User 1 — Stammer",
    before: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2229996662&color=%235b5af7&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false",
    after: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2230010423&color=%235b5af7&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
  },
  user2: {
    label: "User 2 — Cerebral Palsy",
    before: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/collins-njau-544503538/echo_sample_2_before_echo&color=%235b5af7&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false",
    after: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/collins-njau-544503538/echo_sample_after_echo&color=%235b5af7&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
  }
}

export const company_logos = [
  {
    name: 'Global Disability Innovation Hub',
    light: gdihub,        // used on light theme background
    dark: gdidark    // used on dark theme background
  },
  {
    name: 'Strathmore University',
    light: strathlogo,
    dark: strathdark
  },
  {
    name: 'Senses Hub',
    light: senseshub,
    dark: senseshub
  },
  {
    name: 'CDLI',
    light: cdlilight,
    dark: cdlilight
  },
  {
    name: 'University of Birmingham',
    light: UOB,
    dark: UOB
  },
  {
    name: "Begi's Law Offices and Chambers",
    light: BegiLawOffices,
    dark: BegiLawOffices
  },
  {
    name: 'Modal',
    light: modalLogo,
    dark: modalLogo
  }
]

const assets = {
  logo,
  arrow_icon,
  group_profile,
  bgImage1,
  menu_icon,
  close_icon,
  work_mobile_app,
  work_dashboard_management,
  email_icon,
  person_icon,
  facebook_icon,
  twitter_icon,
  instagram_icon,
  linkedin_icon,
  logo_dark,
  menu_icon_dark,
  sun_icon,
  moon_icon,
  Neema,
  simulizi,
  senseshub,
  echohero,
  sautilogo,
  sautilight,
  AITutor,
  echo2,
  echologo2,
  dictationStudio
}

export default assets

export const teamData = [
  { name: 'Collins Njau', title: 'Founder and CEO', image: njauprof ,linkedin:'https://www.linkedin.com/in/collins-njau-294831a7/' },
  { name: 'Ruth Kamau ', title: 'Co-Founder & Programmes Director', image: ruth, linkedin:'https://www.linkedin.com/in/ruth-kamau-b07399127/' },
  { name: 'Martin Muru', title: 'Co-Founder & Head of Technology', image: TwiProf, linkedin:'https://www.linkedin.com/in/martinmuru/' },
  { name: 'Sheila Odhiambo', title: 'Technical Advisor, Programs & MEL', image: sheila, linkedin:'https://www.linkedin.com/in/sheila-odhiambo/' },
  { name: 'Daisy Langat', title: 'Head of User Trust & Engagement', image: daisy, linkedin:'https://www.linkedin.com/in/daisy-lang-at-a37083147/' },
  { name: 'Neema Wambui', title: 'Speech Hardware Research Fellow', image: Neema, linkedin:'https://www.linkedin.com/in/neema-muru-0002b22a9/' },

]
