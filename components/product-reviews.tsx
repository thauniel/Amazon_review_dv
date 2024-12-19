'use client'
// import Image from "next/image"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from '@/components/ui/scroll-area'
import sound_p_review from './sound_ear_sort_with_refe_p.json'
import sound_n_review from './sound_ear_sort_with_refe_n.json'
import ear_p_review from'./ear_ear_sort_with_refe_p.json'
import ear_n_review from'./ear_ear_sort_with_refe_n.json'
import bass_p_review from './bass_ear_sort_with_refe_p.json'
import bass_n_review from './bass_ear_sort_with_refe_n.json'
import fit_p_review from './fit_ear_sort_with_refe_p.json'
import fit_n_review from './fit_ear_sort_with_refe_n.json'
import ANC_p_review from './ANC_ear_sort_with_refe_p.json'
import ANC_n_review from './ANC_ear_sort_with_refe_n.json'
import EQ_p_review from './EQ_ear_sort_with_refe_p.json'
import EQ_n_review from './EQ_ear_sort_with_refe_n.json'
import jbl_p_review from './jbl_ear_sort_with_refe_p.json'
import jbl_n_review from './jbl_ear_sort_with_refe_n.json'
import noise_p_review from './noisemode_ear_sort_with_refe_p.json'
import noise_n_review from './noisemode_ear_sort_with_refe_n.json'
import water_p_review from './amazon_water_humidifier_sort_with_refe_p.json'
import water_n_review from './amazon_water_humidifier_sort_with_refe_n.json'
import mist_p_review from './amazon_mist_humidifier_sort_with_refe_p.json'
import mist_n_review from './amazon_mist_humidifier_sort_with_refe_n.json'
import size_p_hum_review from './amazon_size_humidifier_sort_with_refe_p.json'
import size_n_hum_review from './amazon_size_humidifier_sort_with_refe_n.json'
import lights_p_review from './amazon_lights_humidifier_sort_with_refe_p.json'
import lights_n_review from './amazon_lights_humidifier_sort_with_refe_n.json'


import bear_water_p_review from "./bear_water_sort_with_refe_p.json"
import bear_water_n_review from "./bear_water_sort_with_refe_n.json"
import bear_tank_p_review from './bear_tank_sort_with_refe_p.json'
import bear_tank_n_review from './bear_tank_sort_with_refe_n.json'
import bear_mist_p_review from './bear_mist_sort_with_refe_p.json'
import bear_mist_n_review from './bear_mist_sort_with_refe_n.json'
import bear_size_p_review from './bear_size_sort_with_refe_p.json'
import bear_size_n_review from './bear_size_sort_with_refe_n.json'
import bear_air_p_review from './bear_air_sort_with_refe_p.json'
import bear_air_n_review from './bear_air_sort_with_refe_n.json'
import bear_moisture_p_review from './bear_moisture_sort_with_refe_p.json'
import bear_moisture_n_review from './bear_moisture_sort_with_refe_n.json'
import bear_knob_p_review from './bear_knob_sort_with_refe_p.json'
import bear_knob_n_review from './bear_knob_sort_with_refe_n.json'
import bear_lid_p_review from './bear_lid_sort_with_refe_p.json'
import bear_lid_n_review from './bear_lid_sort_with_refe_n.json'
import TRAUST_ear_p_review from "./TRAUSI_sort_with_refe_p.json"
import TRAUST_ear_n_review from "./TRAUSI_sort_with_refe_n.json"
import TRAUST_sound_p_review from "./TRAUSI_sound_sort_with_refe_p.json"
import TRAUST_sound_n_review from "./TRAUSI_sound_sort_with_refe_n.json"
import TRAUST_phone_p_review from "./TRAUSI_phone_sort_with_refe_p.json"
import TRAUST_phone_n_review from "./TRAUSI_phone_sort_with_refe_n.json"
import TRAUST_quality_p_review from "./TRAUSI_quality_sort_with_refe_p.json"
import TRAUST_quality_n_review from "./TRAUSI_quality_sort_with_refe_n.json"
// import Modal from "react-modal"




const categories = ["Earphone","Humidifier"] as const;
const products = {
  // "Earphone": ["JBL Noise Cancelling Headphones"],
  "Earphone": ["JBL Noise Cancelling Headphones","TRAUSI Open Ear Headphones"],
  "Humidifier": ["Bear Humidifier","pure enrichment Cool Mist Humidifier"],
} as const;

const reviews = {
  "JBL Noise Cancelling Headphones": {
    positive: "These JBL earbuds offer solid sound quality, clear bass, and decent mid-range, especially with the app’s EQ adjustment. While the fit may require some trial and error, and the lack of volume controls is a drawback, the app enhances functionality significantly, allowing customizable sound and noise settings. Ideal for those seeking affordable, good-quality earbuds with flexible sound options.",
    negative: "JBL earbuds fall short with poor fit and uncomfortable tips, lack of volume control, and mediocre noise cancellation. Requires an app for basic adjustments, making them frustrating to use."
  },
  "pure enrichment Cool Mist Humidifier": {
    positive: "This humidifier impresses with its top-fill design, spacious reservoir, and compact size. It offers various mist settings and beautiful light color options, making it both functional and stylish. The easy setup allows for the use of essential oils, while the sleep mode provides a calming atmosphere with low mist and no lights. Ideal for any room, it's user-friendly and enhances your space with its soothing mist and gentle night light.",
    negative: "Missing a piece of rubber on bottom and didn't work , water came  out the bottom."
  },
  "Bear Humidifier": {
    positive: "This compact humidifier holds a large amount of water and lasts a long time. Its powerful mist effectively moistens the air, providing relief, especially during a cold. The clear plastic tank and stylish design with a physical knob are great additions. A reliable device for improved air quality and skin hydration.",
    negative: "This humidifier is designed with a large one-gallon tank, making it easy to refill and long-lasting. It operates quietly, with minimal lighting, ensuring a peaceful environment. The mist is effective without creating any overwhelming moisture, providing a comfortable atmosphere. Perfect for those who prefer a simple, low-maintenance humidifier."
  },
  "TRAUSI Open Ear Headphones": {
    positive: "My husband loves these.He doesn't like ear bugs that go in his ear at all.So these are perfect.There's no chords , they charge fast and last a long time These look and sound much better than I expected. They fit comfortably in my ears and the sound is similar to my more expensive ear buds These connected with ease to my phone Great quality for the price paid",
    negative: "These earphones offer a comfortable, open-ear design that allows you to stay aware of your surroundings. The sound quality is impressive, comparable to higher-end models, making them a great option for those seeking comfort and good sound performance."
  },
  "Blender": {
    positive: "Efficient and easy to clean.",
    negative: "A bit noisy during operation."
  }
}

export function ProductReviewsComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);
  const [selectedAspect, setselectedAspect]=useState<string| undefined>(undefined);
  const [showDetails,setShowDetails]=useState(false);
  const [PositiveData,setPositiveData]=useState<string[]>([]);
  const [PositiveReferences,setPositiveReference]=useState<number[]>([]);
  const [NegativeData,setNegativeData]=useState<string[]>([]);
  const [NegativeReferences,setNegativeReference]=useState<number[]>([]);
  const [ClickReceive,setClickReceive]=useState(false);
  const [PReviews,setPositiveReviews]=useState<string[]>([]);
  const [NReviews,setNegativeReviews]=useState<string[]>([]);
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState('');
  const [expandedIndices, setExpandedIndices] = useState<Record<string, Record<number, boolean>>>({});
  const [expandedRightIndices, setRightExpandedIndices] = useState<Record<string, Record<number, boolean>>>({});

  const toggleExpand = (aspect: string | undefined, index: number) => {
    if (!aspect) return; // 如果 aspect 未定义，直接返回
    setExpandedIndices((prev) => ({
      ...prev,
      [aspect]: {
        ...prev[aspect],
        [index]: !prev[aspect]?.[index], // 切换指定观点和索引的状态
      },
    }));
  };
  const toggleRightExpand = (aspect: string | undefined, index: number) => {
    if (!aspect) return; // 如果 aspect 未定义，直接返回
    setRightExpandedIndices((prev) => ({
      ...prev,
      [aspect]: {
        ...prev[aspect],
        [index]: !prev[aspect]?.[index], // 切换指定观点和索引的状态
      },
    }));
  };


  useEffect(() => {
    if (selectedCategory) {
      setSelectedProduct(products[selectedCategory as keyof typeof products][0]); // Type assertion
    }
  }, [selectedCategory]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setShowDetails(false);
    setClickReceive(false);
  };
  // const openModal = (image:string) => {
  //   setSelectedImage(image);
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  //   setSelectedImage('');
  // };

  const handleProductChange = (value: string) => {
    setSelectedProduct(value);
    setShowDetails(false);
    setClickReceive(false);
  };
  
  const buttonClick=(value:string,isDetailVisible: boolean)=>{
    setselectedAspect(value);
    setClickReceive(isDetailVisible)
  };
  const handleShowDetails=(isDetailVisible: boolean)=>{
    setShowDetails(isDetailVisible)
    setselectedAspect(undefined)
  }
  const handleReviewshow =(reviews:string[],references:number[],reviews2:string[],references2:number[])=>{
    setPositiveData(reviews);
    setPositiveReference(references);
    setNegativeData(reviews2);
    setNegativeReference(references2);
  }
  const Reviews=(Previews:string[],Nreviews:string[])=>{
    setPositiveReviews(Previews)
    setNegativeReviews(Nreviews)
  }

  const calculateKength=(Reviews:string[])=>{
    return Reviews.length
  }
  const renderReviewWithRedHighlight = (review:string) => {
    const sentences = review.split(/(?<=\. )/);
    return (
      <div>
        {sentences.map((sentence, index) => (
            <span key={index} className={selectedAspect && sentence.includes(selectedAspect) ? "bg-red-500 text-white":""}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };

  // const images ={
  //   "JBL Noise Cancelling Headphones": 
  //   [
  //    require("./product_image/rakuten_earphone_1.jpg"),
  //    require("./product_image/rakuten_earphone_2.jpg"),
  //    require("./product_image/rakuten_earphone_3.jpg"),
  //   ],
  // };

  const renderReviewWithBlueHighlight = (review:string) => {
    const sentences = review.split(/(?<=\. )/);
    return (
      <div>
        {sentences.map((sentence, index) => (
            <span key={index} className={selectedAspect && sentence.includes(selectedAspect) ? "bg-blue-500 text-white" : ''}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };
  
  const showReviewWithclickaspect = (review: string) => {
    const sentences = review.split(/(?<=\. )/);
    const filteredSentences = sentences.filter(sentence => 
      selectedAspect && sentence.includes(selectedAspect)
    );
    
    return (
      <div>
        {filteredSentences.map((sentence, index) => (
          <span key={index}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Select onValueChange={handleCategoryChange} value={selectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={handleProductChange} value={selectedProduct} disabled={!selectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Products name" />
            </SelectTrigger>
            <SelectContent>
              {selectedCategory && products[selectedCategory as keyof typeof products].map((product) => (
                <SelectItem key={product} value={product}>
                  {product}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      <div>
        {/* <div className='flex justify-center items-center mb-4'>
            {selectedProduct === "JBL Noise Cancelling Headphones" && images[selectedProduct]?.map((image, index) => (
            <Image 
            key={index} 
            src={image} 
            alt={`Product Image ${index + 1}`}
            className="w-48 h-48 object-cover cursor-pointer" 
            onClick={()=>openModal(image)}/>
            
          ))}
       </div> */}

      {/* <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal">
        <Image src={selectedImage} alt="Selected Product" className="max-w-[50%] max-h-[50%]" style={{width:'50%',height:'50%'}}/>
        <button onClick={closeModal} className='absolute top-4 right-4 text-white bg-gray-800 rounded p-2'>
          Close
        </button>
      </Modal> */}
    </div>

        {selectedProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsUp className="mr-2 text-red-500" />
                  Positive Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{reviews[selectedProduct as keyof typeof reviews]?.positive || "No positive review available."}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsDown className="mr-2 text-blue-500" />
                  Negative Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{reviews[selectedProduct as keyof typeof reviews]?.negative || "No negative review available."}</p>
              </CardContent>
            </Card>
          </div>
        )}

           {selectedProduct && (
          <div className="text-center">
            <Button size="lg" onClick={()=>handleShowDetails(true)}>more detail</Button>
        </div>
        )}

        <div className="my-4"></div>

        {/* 选择观点界面*/}
        <div className="flex justify-center space-x-4 mb-1">
          {showDetails&&selectedProduct === 'JBL Noise Cancelling Headphones' &&(
          <div>
            <button 
              className="rounded-full py-2 px-4 bg-red-500 text-white" 
              title='positive:93 negative:26'
              onClick={() => {
              buttonClick('sound',true);
              Reviews(sound_p_review.reviews,sound_n_review.reviews)
              handleReviewshow(sound_p_review.reviews,sound_p_review.reference,sound_n_review.reviews,sound_n_review.reference);
              }}>
               sound
            </button>

      
        
            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
              
              title='positive:27 negative:7'
              onClick={() => {
                buttonClick('bass',true);
                Reviews(bass_p_review.reviews,bass_n_review.reviews)
                handleReviewshow(bass_p_review.reviews,bass_p_review.reference,bass_n_review.reviews,bass_n_review.reference);
              }}>
                bass
            </button>

            <button className="rounded-full py-2 px-4 bg-red-500 text-white"
              title='positive:11 negative:7'
            
              onClick={() => {
                buttonClick('fit',true);
                Reviews(fit_p_review.reviews,fit_n_review.reviews)
                handleReviewshow(fit_p_review.reviews,fit_p_review.reference,fit_n_review.reviews,fit_n_review.reference);
              }}>
                fit
            </button>

            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
      
              title='positive:8 negative:5'
              onClick={() => {
                buttonClick('ANC',true);
                Reviews(ANC_p_review.reviews,ANC_n_review.reviews)
                handleReviewshow(ANC_p_review.reviews,ANC_p_review.reference,ANC_n_review.reviews,ANC_n_review.reference);
              }}>
                ANC
            </button>
            
            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
         
              title='positive:4 negative:2'
              onClick={() => {
                buttonClick('EQ',true);
                Reviews(EQ_p_review.reviews,EQ_n_review.reviews)
                handleReviewshow(EQ_p_review.reviews,EQ_p_review.reference,EQ_n_review.reviews,EQ_n_review.reference);
              }}>
                EQ
            </button>

            <button className="rounded-full py-2 px-4 bg-blue-500 text-white" 
     
              title='positive:3 negative:5'
              onClick={() => {
                buttonClick('jbl',true);
                Reviews(jbl_p_review.reviews,jbl_n_review.reviews)
                handleReviewshow(jbl_p_review.reviews,jbl_p_review.reference,jbl_n_review.reviews,jbl_n_review.reference);
              }}>
                price
            </button>

            <button 
              className="rounded-full py-2 px-4  " 
           
              title='positive:24 negative:35'
              onClick={() => {
                buttonClick('ear',true);
                Reviews(ear_p_review.reviews,ear_n_review.reviews)
                handleReviewshow(ear_p_review.reviews,ear_p_review.reference,ear_n_review.reviews,ear_n_review.reference);
              }}>
              ear
            </button>

            <button className="rounded-full py-2 px-4" 
              title='positive:11 negative:9'
                onClick={() => {
                buttonClick('noise mode',true);
                Reviews(noise_p_review.reviews,noise_n_review.reviews)
                handleReviewshow(noise_p_review.reviews,noise_p_review.reference,noise_n_review.reviews,noise_n_review.reference);
                }}>
                noise mode
              </button>
          </div>
          )}
      {showDetails&&selectedProduct === 'TRAUSI Open Ear Headphones' &&(
            <div>
              <button className="rounded-full py-2 px-4 bg-red-500 text-white"
             
                title='positive:11 negative:3'
                onClick={() => {
                  buttonClick('ear',true);
                  Reviews(TRAUST_ear_p_review.reviews,TRAUST_ear_n_review.reviews);
                  handleReviewshow(TRAUST_ear_p_review.reviews,TRAUST_ear_p_review.reference,TRAUST_ear_n_review.reviews,TRAUST_ear_n_review.reference);
                }}>
                ear
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
       
                title='positive:17 negative:1'
                onClick={() => {
                  buttonClick('sound',true);
                  Reviews(TRAUST_sound_p_review .reviews,TRAUST_sound_n_review .reviews)
                  handleReviewshow(TRAUST_sound_p_review.reviews,TRAUST_sound_p_review .reference,TRAUST_sound_n_review.reviews,TRAUST_sound_n_review .reference);
                }}>
                sound
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
        
                title='positive:10 negative:0'
                onClick={() => {
                  buttonClick('phone',true);
                  Reviews(TRAUST_phone_p_review.reviews,TRAUST_phone_n_review.reviews)
                  handleReviewshow(TRAUST_phone_p_review.reviews,TRAUST_phone_p_review.reference,TRAUST_phone_n_review.reviews,TRAUST_phone_n_review.reference);
                }}>
                phone
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
        
                title='positive:8 negative:1'
                onClick={() => {
                  buttonClick('quality',true);
                  Reviews(TRAUST_quality_p_review.reviews,TRAUST_quality_n_review.reviews)
                  handleReviewshow(TRAUST_quality_p_review.reviews,TRAUST_quality_n_review.reference,TRAUST_quality_n_review.reviews,TRAUST_quality_n_review.reference);
                }}>
                quality
              </button>

        </div>)}


      
      {showDetails&&selectedProduct === 'pure enrichment Cool Mist Humidifier' &&(
            <div>
              <button className="rounded-full py-2 px-4 bg-red-500 text-white"
             
                title='positive:8 negative:2'
                onClick={() => {
                  buttonClick('water',true);
                  Reviews(water_p_review.reviews,water_n_review.reviews);
                  handleReviewshow(water_p_review.reviews,water_p_review.reference,water_n_review.reviews,water_n_review.reference);
                }}>
                water
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
       
                title='positive:6 negative:0'
                onClick={() => {
                  buttonClick('mist',true);
                  Reviews(mist_p_review.reviews,mist_n_review.reviews)
                  handleReviewshow(mist_p_review.reviews,mist_p_review.reference,mist_n_review.reviews,mist_n_review.reference);
                }}>
                mist
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
        
                title='positive:5 negative:0'
                onClick={() => {
                  buttonClick('size',true);
                  Reviews(size_p_hum_review.reviews,size_n_hum_review.reviews)
                  handleReviewshow(size_p_hum_review.reviews,size_p_hum_review.reference,size_n_hum_review.reviews,size_n_hum_review.reference);
                }}>
                size
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
        
                title='positive:3 negative:0'
                onClick={() => {
                  buttonClick('lights',true);
                  Reviews(lights_p_review.reviews,lights_n_review.reviews)
                  handleReviewshow(lights_p_review.reviews,lights_p_review.reference,lights_n_review.reviews,lights_n_review.reference);
                }}>
                lights
              </button>

        </div>)}
        {showDetails&&selectedProduct === "Bear Humidifier"&& (
            <div className='flex flex-wrap justify-center'>
              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title="positive:33 negative:20"
               onClick={()=>{
               buttonClick("water",true)
               Reviews(bear_water_p_review.reviews,bear_water_n_review.reviews)
               handleReviewshow(bear_water_p_review.reviews,bear_water_p_review.reference,bear_water_n_review.reviews,bear_water_n_review.reference)  
              }
               }
              >
                water
              </button>

              
           <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:13 negative:7'
              onClick={() => {
                buttonClick("tank",true)
                Reviews(bear_tank_p_review.reviews,bear_tank_n_review.reviews)
                handleReviewshow(bear_tank_p_review.reviews,bear_tank_p_review.reference,bear_tank_n_review.reviews,bear_tank_n_review.reference)
              }}>
              tank
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:15 negative:6'
              onClick={() => {
                buttonClick("mist",true)
                Reviews(bear_mist_p_review.reviews,bear_mist_n_review.reviews)
                handleReviewshow(bear_mist_p_review.reviews,bear_mist_p_review.reference,bear_mist_n_review.reviews,bear_mist_n_review.reference)
              }}>
              mist
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:11 negative:1'
              onClick={() => {
                buttonClick("size",true)
                Reviews(bear_size_p_review.reviews,bear_size_n_review.reviews)
                handleReviewshow(bear_size_p_review.reviews,bear_size_p_review.reference,bear_size_n_review.reviews,bear_size_n_review.reference)
              }}>
              size
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:4 negative:0'
              onClick={() => {
                buttonClick("air",true)
                Reviews(bear_air_p_review.reviews,bear_air_n_review.reviews)
                handleReviewshow(bear_air_p_review.reviews,bear_air_p_review.reference,bear_air_n_review.reviews,bear_air_n_review.reference)
              }}>
              air
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:5 negative:0'
              onClick={() => {
                buttonClick("moisture",true)
                Reviews(bear_moisture_p_review.reviews,bear_moisture_n_review.reviews)
                handleReviewshow(bear_moisture_p_review.reviews,bear_moisture_p_review.reference,bear_moisture_n_review.reviews,bear_moisture_n_review.reference)
              }}>
              moisture
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:6 negative:0'
              onClick={() => {
                buttonClick("knob",true)
                Reviews(bear_knob_p_review.reviews,bear_knob_n_review.reviews)
                handleReviewshow(bear_knob_p_review.reviews,bear_knob_p_review.reference,bear_knob_n_review.reviews,bear_knob_n_review.reference)
              }}>
              knob
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
               title='positive:3 negative:1'
              onClick={() => {
                buttonClick("lid",true)
                Reviews(bear_lid_p_review.reviews,bear_lid_n_review.reviews)
                handleReviewshow(bear_lid_p_review.reviews,bear_lid_p_review.reference,bear_lid_n_review.reviews,bear_lid_n_review.reference)
              }}>
              lid
            </button>
            </div> )}
      </div>

      {showDetails&&ClickReceive&&
        <div className="w-full flex justify-between ">
          <div className='flex items-center'>
          <ThumbsUp className="text-red-500" />
           <div className="text-red-500 text-left ml-0">{selectedAspect}{calculateKength(PReviews)}件(Positive)
           
           </div>
          </div>
          <div className='flex items-center'>
          <ThumbsDown className="text-blue-500" />
          <div className="text-blue-500 text-right mr-0">{selectedAspect}{calculateKength(NReviews)}件(Negative)</div>
          </div>
        </div>}


        {showDetails&&ClickReceive&&
        <div className="w-full mb-4 h-[600px] flex space-x-4">
        <ScrollArea className="border border-red-500 rounded-lg shadow-lg h-[600px] w-1/2 p-4 ">
         <div className="flex flex-col space-y-2">
            {/* 根据 selectedData 数组中的内容渲染 */}
            {PositiveData.map((review, index) => (
              <div key={index} className="border-b py-2 last:border-b-0">
                <div className="flex flex-col">
                  <div>
                    <div>
                     {!expandedIndices[selectedAspect!]?.[index] && showReviewWithclickaspect(review)}
                    </div>
                  {expandedIndices[selectedAspect!]?.[index] &&(
                  <div>
                    <div className="mt-2">{renderReviewWithRedHighlight(review)}</div>
                  </div>
                  )}
                   <button
                       className="font-bold ml-2"
                      //  className="text-blue-500 ml-2"
                       onClick={()=>toggleExpand(selectedAspect!,index)}>
                          {expandedIndices[selectedAspect!]?.[index] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-500">
                    References: {PositiveReferences[index]}
                  </div>
                </div>
              </div>
      
            ))}
          
          </div>
          </ScrollArea>
          <ScrollArea className="border border-blue-500 rounded-lg shadow-lg h-[600px] w-1/2 p-4">
         <div className="flex flex-col space-y-2">
            {/* 根据 selectedData 数组中的内容渲染 */}
            {NegativeData.map((review, index) => (
              <div key={index} className="border-b py-2 last:border-b-0">
                <div className="flex flex-col">
                  <div>
                   <div>
                     {!expandedRightIndices[selectedAspect!]?.[index] && showReviewWithclickaspect(review)}
                    </div>
                  {expandedRightIndices[selectedAspect!]?.[index] &&(
                  <div>
                    <div className="mt-2">{renderReviewWithBlueHighlight(review)}</div>
                  </div>
                  )}
                   <button
                       className="font-bold ml-2"
                      //  className="text-blue-500 ml-2"
                       onClick={()=>toggleRightExpand(selectedAspect!,index)}>
                          {expandedRightIndices[selectedAspect!]?.[index] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-500">
                    References: {NegativeReferences[index]}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </ScrollArea>
        </div>}


      </div>
    </div>
  )
}
