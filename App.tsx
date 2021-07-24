import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import admob, { MaxAdContentRating, BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob';

export default function App() {

  admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
  });

  return (
    <SafeAreaView>
      <View>
        <BannerAd 
          size={BannerAdSize.SMART_BANNER}
          unitId={TestIds.BANNER}
        >
        </BannerAd>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}
