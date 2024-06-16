import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements'; 
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 8, marginTop: 40 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Eric Atsu</Text>
        <Text>eric@gmail.com</Text>
      </View>
      <View style={styles.profilepic}>
        <Image
          source={require('./assets/Ellipse.png')}
          style={styles.prof_pic}
        />
      </View>
      <View style={{ height: 20 }} />
      <SearchBar
        placeholder="Search a job or position"
        placeholderTextColor="#c6c6c6"
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchInput}
        inputStyle={styles.searchText}
      />
      <Image
        source={require('./assets/filter.5.png')}
        style={styles.prof1_pic}
      />
      <View style={{ height: 10 }} />
      <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#0D0D26;', marginLeft: 15 }}>Featured Jobs</Text>
      <View style={{ height: 16 }} />
      
      <View style={styles.firstcards}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card style={styles.card1features}>
          <Image
            source={require('./assets/Group 54.png')}
            style={styles.prof2_pic}
          />
          <Text style={styles.cardtext}>Software Engineer</Text>
          <Text style={{ height: 8 }} />
          <Text style={{ color: '#FFFFFF', marginLeft: 90 }}>Facebook</Text>
          <Text style={{ color: '#FFFFFF', marginTop: 80, marginLeft: 25 }}>$180,000</Text>
          <Text style={{ color: '#FFFFFF', marginLeft: 180, marginTop: -20 }}>Accra, Ghana</Text>
        </Card>
        <Card style={styles.card2features}>
          <Image
            source={require('./assets/Group 55.png')}
            style={styles.prof2_pic}
          />
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', marginLeft: 100, marginTop: -60 }}>Software Engineer</Text>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', marginLeft: 100 }}>Google</Text>
          <Text style={{ fontWeight: 'bold', color: '#FFFFFF', marginLeft: 20, marginTop: 120 }}>$25,000</Text>
          <Text style={{ fontWeight: 'bold', color: '#FFFFFF', marginLeft: 160, marginTop: -18 }}>Walewale, Ghana</Text>
        </Card>
        
        <Card style={[styles.cardFeatures, { backgroundColor: '#FF5733' }]}>
          <Image
            source={require('./assets/Group 54.png')}
            style={styles.prof2_pic}
          />
          <Text style={styles.cardtext}>Data Scientist</Text>
          <Text style={{ height: 8 }} />
          <Text style={{ color: '#FFFFFF', marginLeft: 90 }}>Microsoft</Text>
          <Text style={{ color: '#FFFFFF', marginTop: 80, marginLeft: 25 }}>$120,000</Text>
          <Text style={{ color: '#FFFFFF', marginLeft: 180, marginTop: -20 }}>Kumasi, Ghana</Text>
        </Card>
        <Card style={[styles.cardFeatures, { backgroundColor: '#C70039' }]}>
          <Image
            source={require('./assets/Group 54.png')}
            style={styles.prof2_pic}
          />
          <Text style={styles.cardtext}>UX Designer</Text>
          <Text style={{ height: 8 }} />
          <Text style={{ color: '#FFFFFF', marginLeft: 90 }}>Amazon</Text>
          <Text style={{ color: '#FFFFFF', marginTop: 80, marginLeft: 25 }}>$95,000</Text>
          <Text style={{ color: '#FFFFFF', marginLeft: 180, marginTop: -20 }}>Tema, Ghana</Text>
        </Card>
        <Card style={[styles.cardFeatures, { backgroundColor: '#900C3F' }]}>
          <Image
            source={require('./assets/Group 54.png')}
            style={styles.prof2_pic}
          />
          <Text style={styles.cardtext}>Product Manager</Text>
          <Text style={{ height: 8 }} />
          <Text style={{ color: '#FFFFFF', marginLeft: 90 }}>Apple</Text>
          <Text style={{ color: '#FFFFFF', marginTop: 80, marginLeft: 25 }}>$150,000</Text>
          <Text style={{ color: '#FFFFFF', marginLeft: 180, marginTop: -20 }}>Takoradi, Ghana</Text>
        </Card>
        <Card style={[styles.cardFeatures, { backgroundColor: '#581845' }]}>
          <Image
            source={require('./assets/Group 54.png')}
            style={styles.prof2_pic}
          />
          <Text style={styles.cardtext}>Cybersecurity Expert</Text>
          <Text style={{ height: 8 }} />
          <Text style={{ color: '#FFFFFF', marginLeft: 90 }}>Netflix</Text>
          <Text style={{ color: '#FFFFFF', marginTop: 80, marginLeft: 25 }}>$110,000</Text>
          <Text style={{ color: '#FFFFFF', marginLeft: 180, marginTop: -20 }}>Cape Coast, Ghana</Text>
        </Card>
        <Card style={[styles.cardFeatures, { backgroundColor: '#DAF7A6' }]}>
          <Image
            source={require('./assets/Group 54.png')}
            style={styles.prof2_pic}
          />
          <Text style={styles.cardtext}>DevOps Engineer</Text>
          <Text style={{ height: 8 }} />
          <Text style={{ color: '#FFFFFF', marginLeft: 90 }}>Spotify</Text>
          <Text style={{ color: '#FFFFFF', marginTop: 80, marginLeft: 25 }}>$130,000</Text>
          <Text style={{color:'#FFFFFF', marginLeft: 180, marginTop: -20 }}>Ho, Ghana</Text>
        </Card>
        <Card style={[styles.cardFeatures, { backgroundColor: '#FFC300' } ]}>
          <Image
            source={require('./assets/Group 54.png')}
            style={styles.prof2_pic}
          />
          <Text style={styles.cardtext}>System Administrator</Text>
          <Text style={{ height: 8 }} />
          <Text style={{ color: '#FFFFFF', marginLeft: 90 }}>Intel</Text>
          <Text style={{ color: '#FFFFFF', marginTop: 80, marginLeft: 25 }}>$105,000</Text>
          <Text style={{ color: '#FFFFFF', marginLeft: 180, marginTop: -20 }}>Sunyani, Ghana</Text>
        </Card>
        <Card style={[styles.cardFeatures, { backgroundColor: '#FF5733' }]}>
          <Image
            source={require('./assets/Group 54.png')}
            style={styles.prof2_pic}
          />
          <Text style={styles.cardtext}>AI Engineer</Text>
          <Text style={{ height: 8 }} />
          <Text style={{ color: '#FFFFFF', marginLeft: 90 }}>IBM</Text>
          <Text style={{ color: '#FFFFFF', marginTop: 80, marginLeft: 25 }}>$140,000</Text>
          <Text style={{ color: '#FFFFFF', marginLeft: 180, marginTop: -20 }}>Tamale, Ghana</Text>
        </Card>
        <Card style={[styles.cardFeatures, { backgroundColor: '#C70039' }]}>
          <Image
            source={require('./assets/Group 54.png')}
            style={styles.prof2_pic}
          />
          <Text style={styles.cardtext}>Cloud Architect</Text>
          <Text style={{ height: 8 }} />
          <Text style={{ color: '#FFFFFF', marginLeft: 90 }}>Oracle</Text>
          <Text style={{ color: '#FFFFFF', marginTop: 80, marginLeft: 25 }}>$170,000</Text>
          <Text style={{ color: '#FFFFFF', marginLeft: 180, marginTop: -20 }}>Bolgatanga, Ghana</Text>
        </Card>  
      </ScrollView>
      
   <View style={{height: 40}}/>
  
  </View>
  
   <View style={{marginTop: -30, flex: 1}}>

    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20,}}>Popular Jobs</Text>
      <Text style={{marginLeft: 300, marginTop: -20}}>see all</Text>
      </View>
  <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View>
      <Card style={styles.jobcard}>
       <Image
            source={require('./assets/burger-king-4 1.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Jr Executive</Text>
          <Text>burger King</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$96,000/y</Text>
          <Text>Los Angeles, US</Text>
          </View>
      </Card>
<View style={{height: 10}}/>
      <Card style={styles.jobcard2}>
       <Image
            source={require('./assets/image 8.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Product Manager</Text>
          <Text>Beats</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$84,000/y</Text>
          <Text>Florida, US</Text>
          </View>
      </Card>
<View style={{height: 10}}/>
       <Card style={styles.jobcard3}>
       <Image
            source={require('./assets/Vector.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Producr Manager</Text>
          <Text>Facebook</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$86,000/y</Text>
          <Text>Florida, US</Text>
          </View>
      </Card>
<View style={{height: 10}}/>
      <Card style={styles.jobcard4}>
       <Image
            source={require('./assets/burger-king-4 1.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Producr Manager</Text>
          <Text>Facebook King</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$86,000/y</Text>
          <Text>Florida, US</Text>
          </View>
      </Card>
<View style={{height: 10}} />
<Card style={styles.jobcard4}>
       <Image
            source={require('./assets/image 8.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Snr Developer</Text>
          <Text>Facebook King</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$186,000/y</Text>
          <Text>Walewale, US</Text>
          </View>
      </Card>
<View style={{height: 10}} />
<Card style={styles.jobcard4}>
       <Image
            source={require('./assets/burger-king-4 1.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Producr Manager</Text>
          <Text>Facebook King</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$86,000/y</Text>
          <Text>Florida, US</Text>
          </View>
      </Card>
<View style={{height: 10}} />
      <Card style={styles.jobcard5}>
       <Image
            source={require('./assets/image 8.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Producr Manager</Text>
          <Text>Facebook King</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$86,000/y</Text>
          <Text>Florida, US</Text>
          </View>
      </Card>
<View style={{height: 10}}/>

<Card style={styles.jobcard4}>
       <Image
            source={require('./assets/burger-king-4 1.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Producr Manager</Text>
          <Text>Facebook King</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$86,000/y</Text>
          <Text>Florida, US</Text>
          </View>
      </Card>
<View style={{height: 10}} />
      <Card style={styles.jobcard6}>
       <Image
            source={require('./assets/image 8.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Producr Manager</Text>
          <Text>Facebook King</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$86,000/y</Text>
          <Text>Florida, US</Text>
          </View>
      </Card>
<View style={{height:10}}/>
      <Card style={styles.jobcard7}>
       <Image
            source={require('./assets/burger-king-4 1.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Producr Manager</Text>
          <Text>Facebook King</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$86,000/y</Text>
          <Text>Florida, US</Text>
          </View>
      </Card>
  <View style={{height:10}}/>
  <Card style={styles.jobcard4}>
       <Image
            source={require('./assets/image 8.png')}
            style={{marginTop: 10, marginLeft: 20, height: 50, width: 50,}}
          />
          <View style={styles.jobcardtext}>
          <Text style={{fontWeight: 'bold', fontSize: 18,}}>Producr Manager</Text>
          <Text>Facebook King</Text>
          </View>
          <View style={styles.jobcardtext2}>
          <Text style={{fontWeight: 'bold',}}>$86,000/y</Text>
          <Text>Florida, US</Text>
          </View>
      </Card>

      </View>
      </ScrollView>
      </View>
      
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  prof_pic: {
    height: 65,
    width: 65,
    marginLeft: 310,
    marginTop: -48,
  },
  searchBar: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    width: '75%',
    marginLeft: 10,
    marginRight: 40,
    borderTopColor: 'transparent',
    marginTop: 20,
  },
  searchInput: {
    backgroundColor: '#f2f2f2',
    height: 40,
  },
  prof1_pic: {
    height: 65,
    width: 65,
    marginLeft: 320,
    marginTop: -54,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  card1features: {
    height: 220,
    width: '10%',
    marginLeft: 15,
    backgroundColor: '#5386E4',
    borderRadius: 25,
  },
  card2features: {
    height: 220,
    width: '10%',
    marginLeft: 15,
    backgroundColor: '#041E42',
    borderRadius: 25,
  },
  cardFeatures: {
    height: 220,
    width: '10%',
    marginLeft: 15,
    borderRadius: 25,
  },
  cardtext: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 90,
    marginTop: -50,
    color: '#FFFFFF'
  },
  prof2_pic: {
    marginLeft: 25,
    marginTop: 25,
    height: 70,
    width: 50,
  },
  jobcard: {
    height: 70,
    width: '95%',
    backgroundColor:'#FFFFFF', 
    borderRadius: 30,
  },
  jobcardtext: {
    marginLeft: 75,
    marginTop: -40,
  },
  jobcardtext2: {
    marginLeft: 225,
    marginTop: -40,
  },

jobcard2: {
    height: 70,
    width: '95%',
    backgroundColor:'#FFFFFF', 
    borderRadius: 30,
  },

  jobcard3: {
    height: 70,
    width: '95%',
    backgroundColor:'#FFFFFF', 
    borderRadius: 30,
  },
  jobcard4: {
  height: 70,
    width: '95%',
    backgroundColor:'#FFFFFF', 
    borderRadius: 30,
},
jobcard5: {
  height: 70,
    width: '95%',
    backgroundColor:'#FFFFFF', 
    borderRadius: 30,
},
jobcard6: {
  height: 70,
    width: '95%',
    backgroundColor:'#FFFFFF', 
    borderRadius: 30,
},
jobcard7: {
  height: 70,
    width: '95%',
    backgroundColor:'#FFFFFF', 
    borderRadius: 30,
},
firstcards: {
  marginTop: 5,
},


});