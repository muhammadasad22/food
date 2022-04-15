import { View, Text, FlatList, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const COLORS = { primary: '#22A45D'}

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../assests/images/img1.png'),
    title: 'All your favorites',
    description: 'Order from the best local restaurants \nwith easy, on-demand delivery.'
  },
  {
    id: '2',
    image: require('../../assests/images/img2.png'),
    title: 'Free delivery offers',
    description: 'Free delivery for new customers via Apple \nPay and others payment methods.'
  },
  {
    id: '3',
    image: require('../../assests/images/img3.png'),
    title: 'Choose your food',
    description: 'Easily find your type of food craving and \nyou will get delivery in wide range.'
  }
]

const Slide = ({ item }) => {
  return (
    <View style={{alignItems: 'center', backgroundColor: '#f'}}>
    <View style={styles.imageCont}>
       <Image
         source={item.image}
         style={styles.image}
       />
    </View>
    
     <Text style={styles.title}>{item.title}</Text>

     <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setcurrentSlideIndex] = React.useState(0);
  const Footer = () => {
    return (
      <View style={{
        height: height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
        <View style={{
          flexDirection: 'row', 
          justifyContent: 'center',
          marginTop: 20,
        }}>
          {slides.map((_ , index) => (
            <View
              key={index} 
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.primary,
                  width: 25,
                }
              ]} />
          ))}
        </View>
       <View style={{marginBottom: 20}}>
         <View style={{flexDirection: 'row'}}>
             <TouchableOpacity 
               onPress={() => navigation.replace('SignIn')}             
               style={styles.btn}>
                 <Text style={{
                   fontSize: 20,
                   fontWeight: 'bold',
                   color: '#fff'
                 }}>GET STARTED</Text>
             </TouchableOpacity>
         </View>
       </View>
      </View>
    )
  }

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setcurrentSlideIndex(currentIndex);
  }
  return (
    <View style={{backgroundColor: '#fff'}}>
      <FlatList
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          data={slides}
          renderItem={({ item }) => <Slide item={item}/>}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{height: height * 0.75}}
      />
      <Footer/>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
   title: {
      marginTop: 20,
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
   },
   description: {
      marginTop: 10,
      fontSize: 15,
      color: '#868686',
      textAlign: 'center',
   },
   image: {
      height: '75%', 
      width, 
      resizeMode: 'contain'
   },
   imageCont: {
      backgroundColor: '#fff', 
      justifyContent: 'center', 
   },
   indicator: {
    height: 5,
    width: 10,
    backgroundColor: '#979797',
    marginHorizontal: 3,
    borderRadius: 2,
   },
   btn: {
     flex: 1,
     height: 50,
     borderRadius: 5,
     backgroundColor: COLORS.primary,
     justifyContent: 'center',
     alignItems: 'center'
   }
});