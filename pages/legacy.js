import Navbar from '../components/legacy/LEGACYNavbar'
import Banner from '../components/legacy/LEGACYBanner'
import Section from '../components/legacy/LEGACYSection'


//pictures
import testPicture from '../public/arrow-down.png'
import RainbowBridgePic from '../public/Levy-Park.jpg'
import MapPic from '../public/Map-Image.jpg'
import NightCityPic from '../public/UPW-dusk-skyline.jpg'
import DuskCityPic from '../public/UPW-dusk-toward-water.jpg'
import RoomPic from '../public/UPW-NT-Interior-revised.jpg'
import ParkPic from '../public/UPW-Park-Axo.jpg'
import FurtureGardenPic from '../public/UPW-Winter-Garden-revised.jpg'
import { element } from 'prop-types'

export default function Home() {
  const data = [
    {
      header: "At A Glance",
      blurps: [
        {
          header: "OXFORD IN TORONTO",
          items: [
            {
              type:"text",
              data:"Oxford is deeply committed to Toronto: our head office is located here, and over half our global" +
              "employees live here. The future of the city, its economic health, and social well-being are important" +
              "to us"
            },
            {
              type:"text",
              data: "Oxford Properties Group is the owner, developer and manager of some of the world’s best real estate. For" +
              "the past 50+ years, Oxford has developed and managed an impressive portfolio of memorable, high quality" +
              "projects across Canada that support our communities and deliver strong employment and economic growth. To" +
              "learn more about our story,"
            }]
        },
        {
          header:"REMARKABLE ARCHITECTURE",
          items: [
            {data:"Exceptional architecture and sculpted design from a globally-renowned architectural team will enhance" +
            "Toronto’s iconic skyline."},
            {data:"Our goal at Oxford is to connect people to exceptional places. The architectural expression for Union Park" +
            "will shape the city of the future."},
            {type:"picture",data:NightCityPic},
            {data:"The project is a celebration of Toronto. From the south, the two office towers diverge at the" +
            "top, as does the ‘wrap’ on the south residential tower providing a metaphorical ‘opening’ of the city’s arms" +
            "to the world while mimicking the trajectory of skyline fireworks. The base of the office towers spread open" +
            "into a massive winter garden, again, an arms-open welcoming of people through the site."}]
        },
        {
          header:"THE NEIGHBOURHOOD",
          items:[
            {data:"Uniquely situated adjacent to the CN Tower and Rogers Centre, Union Park is a four-acre site at the heart" +
            "of Toronto’s dynamic downtown core."},
            {data:"Union Park is located in the heart of Toronto’s vibrant Entertainment District and in close proximity to" +
            "the John Street Cultural Corridor, surrounded by world-renowned cultural attractions. The neighbourhood is" +
            "well connected to the city and beyond by foot, bike, boat, and plane."},
            {type:"picture",data:MapPic},
            {data:"For more information on the Union Park development"},
            {data:"TODO - custom"}
          ]
        }
      ]
    },
    {
      header:"The Vision",
      blurps:[
        {
          header:"OUR VISION",
          items:[
            {data:"Our vision is to build upon and complement Toronto’s icons with exceptional, but timeless design. Union" +
            "Park will deliver the largest mixed-use development in Toronto’s history – contributing office space," +
            "community-serving retail, rental residential, public realm improvements, and a large park."},
            {data:"Union Park is proposed to be a 4.3 million square foot landmark development that will deliver" +
            "approximately:"},
            {data:"TODO"},
            {data:"This redevelopment will become the best expression of a mixed-use community in Toronto."},
            {type:"picture",data:FurtureGardenPic}
          ]
        },
        {
          header:"A WORLD-CLASS CITY",
          items:[
            {data:"Union Park will be a transformative development that will celebrate Toronto’s great diversity, vibrancy," +
            "and success."},
            {data:"Our goal at Oxford is to connect people to exceptional places, so we are creating an ambitious project that" +
            "adds to Toronto’s ongoing evolution as a world-class city to live and work in."},
            {data:"Our big ideas for Union Park include:"},
            {data:"TODO"},
            {type:"picture",data:DuskCityPic}
          ]
        }
      ]
    },
    {
      header: "The Community",
      blurps:[
        {
          header: "COMMUNITY AMENITIES",
          items:[
            {data:"Union Park will provide a broad range of amenities to meet the needs of a diverse population of residents," +
            "workers, and visitors."}
          ]
        },
        {
          header: "COMMUNITY-SERVING RETAIL",
          items:[
            {data:"Union Park will include 200,000 square feet of retail space to create a vibrant shopping experience." +
            "Offerings will include food, beverage, and health, as well as services like grocery stores and pharmacies to" +
            "address service gaps in the neighbourhood."}
          ]
        },
        {
          header: "PARKS",
          items:[
            {data:"Union Park will offer new gathering spaces for the community. New park space will be designed to provide" +
            "strong visual interest, rich landscaping, and engaging spaces for a diverse community."},
            {data:"TODO"}
          ]
        },
        {
          header: "DAYCARE",
          items:[
            {data:"Toronto is experiencing a shortage of daycare spaces. A study conducted in 2016 found that the demand for" +
            "licensed daycare spaces outstripped supply by 4,069 spots. Our family-oriented development will include an" +
            "integrated 8,500 square foot daycare to support growing families in our community and the surrounding" +
            "neighbourhood."}
          ]
        },
        {
          header: "NEW JOBS AND EMPLOYMENT",
          items:[
            {data:"Union Park will create new jobs and employment space in the heart of the downtown."},
            {data:"Union Park reflects Toronto’s status as a global hub for finance, commerce, innovation, and creativity," +
            "supporting a strong employment base and thriving economy."},
            {data:"Our proposal includes 3.3 million square feet gross building area of office space across two towers. The" +
            "base of the two office towers will feature bright, oversized spaces, drawing talented and innovative minds" +
            "from across the globe-that’s enough space for 18,000 employees."},
            {data:"Oxford’s Toronto office tenants employ over 50,000 workers which represents 15% of the total workforce in" +
            "the City of Toronto’s downtown core."}
          ]
        },
        {
          header: "NEW LIVING SPACES",
          items:[
            {data:"Our proposal includes rental residential housing for Toronto’s growing and diverse downtown population," +
            "including families and young professionals."},
            {type:"picture",data:RoomPic},
            {data:"Union Park will help to meet the demands for rental residential and family-friendly housing in Toronto. We" +
            "are proposing approximately 800 units across two towers with a mix of 2- and 3-bedroom suites to accommodate" +
            "families, as well as 1 bedroom and studio units."},
            {data:"TODO"}
          ]
        },
        {
          header: "THE PARK AT UNION PARK",
          items:[
            {data:"The park is a momentous city-building initiative that will create a landmark community-gathering space for" +
            "generations to come."},
            {data:"A key feature of Union Park is an expansive park that will span from Blue Jays Way to the John Street " +
            "bridge, and connect to the future Rail Deck Park to the west. The two-acre park, designed by award-winning " +
            "OJB Architects, will aim to deliver much needed green space to downtown Toronto and create opportunities for " +
            "flexible, programmable community spaces, public art, and installations. Working with the city and adjacent " +
            "landowners, our aspiration is to create a legacy urban park for Torontonians and visitors to enjoy for " +
            "decades to come."},
            {type:"picture",data:ParkPic}
          ]
        }
      ]
    },
    {
      header:"The DESIGN",
      blurps: [
        {
          header:"SUSTAINABLE DESIGN",
          items: [
            {data:"Sustainability and energy efficiency are part of Oxford’s core principles."},
            {data:"Union Park will feature progressive design strategies for a sustainable future."}
          ]
        },
        {
          header:"CYCLING",
          items:[
            {data:"Union Park will support cycling in Toronto through the provision of at-grade bicycle facilities for both " +
            "residents and office dwellers, including 80 showers."},
            {data:"TODO"}
          ]
        },
        {
          header:"PUBLIC REALM AND CONNECTIONS",
          items:[
            {data:"Sustainability and energy efficiency are part of Oxford’s core principles. Union Park will feature " +
            "progressive design strategies for a sustainable future."},
            {data:"Union Park will integrate with the surrounding neighbourhood through a network of public realm and " +
            "landscape improvements, park space, and a new PATH connection."},
            {data:"Improvements to the public realm and connections will include:"},
            {data:"TODO"}
          ]
        }
      ]
    },
    {
      header:"The Team",
      blurps:[
        {
          header:"MEET THE ARCHITECTS",
          items:[
            {data:"Oxford has selected globally renowned Pelli Clarke Pelli Architects and Adamson Associates for this legacy " +
            "project."},
            {type:"picture",data:RainbowBridgePic},
            {data:"Founded in 1977, Pelli Clarke Pelli Architects has designed some of the world’s most recognizable buildings " +
            "and shaped iconic skylines all over the world. Pelli Clarke Pelli Architects create stunning towers that " +
            "re-think the possibilities for tall-buildings. Their work for public and private clients includes office " +
            "buildings, hotels, residences, performing arts centers, museums, academic buildings, libraries, research " +
            "centers, and master plans. Their head office is located New Haven, Connecticut. View their global portfolio"},
            {data:"TODO"}
          ]
        },
        {
          header:"ADAMSON ASSOCIATES | LEAD ARCHITECTS",
          items:[
            {data:"Adamson Associates is a Toronto-based architecture firm established in 1934, with offices in New York, Los " +
            "Angeles, and London. Their portfolio encompasses projects in virtually every market sector. Adamson " +
            "Associates has won numerous prestigious design awards and has succeeded in winning several international " +
            "design competitions."},
            {data:"Adamson Associates have created some of the world’s most iconic, globally recognized buildings that have " +
            "become beloved landmarks. Their founder, Gordon Adamson, is known for his prominent role in creating the " +
            "Canadian modernist style of architecture. View their global portfolio"},
            {data:"TODO"}
          ]
        },
        {
          header:"MEET THE LANDSCAPE ARCHITECTS",
          items:[
            {data:"Oxford has selected globally renowned OJB Landscape Architecture for this legacy project."},
            {data:"OJB Landscape Architecture focuses on creating landscapes that shape unique and unforgettable experiences. " +
            "Their firm combines landscape and architecture to create unique designs that challenge the boundaries of " +
            "landscape architecture. OJB draws on this interdisciplinary practice to create original and inventive " +
            "landscapes that consider the context and are highly functional. OJB was founded in 1989 in Houston Texas. " +
            "Their offices are located in San Diego, Boston, Dallas, and Philadelphia. View their global portfolio "},
            {data:"TODO"},
            {type:"picture",data:testPicture}
          ]
        }
      ]
    },
    {
      header:"Next Steps",
      blurps:[
        {
          header:"TIMELINE AND NEXT STEPS",
          items:[
            {data:"We anticipate the following project timeline for the development process:"},
            {data:"TODO"}
          ]
        }
      ]
    }
  ]
  let content = data.map( (element,index) => {
    return(<Section key={index} display={element}>this is it</Section>)
  })
  const navBarAnkors = data.map( (element,index) => {
    return (element.header)
  })
  return (
    <div>
      <Navbar items={navBarAnkors}></Navbar>
      <Banner></Banner>
      {content}
    </div>
  )
}
