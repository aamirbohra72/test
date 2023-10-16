import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Box, theme } from '@/atoms';
import {useState, useEffect}  from 'react';

const CartScreen = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
  
    const customerCartId = useSelector(
      state =>
        state?.getCustomerBasketApiSlice?.customerBasket?.data?.baskets?.[0]
          ?.basket_id || [],
    );
  
  return (
    <View>
      <Text>CartScreenssssss</Text>
      <Box
      borderRadius={8}
      borderColor="border"
      borderWidth={1}
      mb="s8"
      padding="s8"
      flex={1}
    ></Box>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});



// import { StyleSheet, Text, ActivityIndicator,FlatList,ScrollVie SafeAreaView} from 'react-native';
// import React,{useState, useEffect, useContext} from 'react';

// import { Box, theme } from '@/atoms';
// import { useSelector, useDispatch } from 'react-redux';
// import CommonHeader from '@/components/CommonHeader/CommonHeader';
// import { useNavigation } from '@react-navigation/native';
// import { useIsUserLoggedIn } from '@/hooks/useIsUserLoggedIn';
// import { getCustomerCartItems } from '@/redux/cartItemsApi/CartItemsAsyncThunk';
// // import CartItem from './CartItem';
// import CommonSolidButton from '@/components/CommonSolidButton/CommonSolidButton';


//   const CartScreen = () => {
//     const navigation = useNavigation();
//     const [isLoading, setIsLoading] = useState(true);
//     const { isUserLoggedIn } = useIsUserLoggedIn();
//     const dispatch = useDispatch();
  
//     const customerCartId = useSelector(
//       state =>
//         state?.getCustomerBasketApiSlice?.customerBasket?.data?.baskets?.[0]
//           ?.basket_id || [],
//     );
  
//     const customerCartItems = useSelector(
//       state => state?.getCustomerCartItemsAliSlice?.customerCartItems?.data || [],
//     );
  
//     useEffect(() => {
//       dispatch(
//         getCustomerCartItems(`sfcc/getCartDetails/${customerCartId}`),
//       ).then(res => {
//         if (res.payload.status === 200) {
//           console.log('carts api call successful');
//           setIsLoading(false);
//         } else {
//           setIsLoading(false);
//           console.log('carts api call not successful');
//         }
//       });
//     }, []);
  
  
//     return (
//       <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//         <Box flex={1} backgroundColor="white">
//           {isUserLoggedIn ? (
//             <>
//               <CommonHeader title={'Your Cart'} />
//               {isLoading ? (
//                 <>
//                   <ActivityIndicator color={theme.colors.sushiittoRed} />
//                 </>
//               ) : (
//                 <>
//                   <ScrollView
//                     contentContainerStyle={{
//                       flexGrow: 1,
//                       paddingHorizontal: theme.spacing.paddingHorizontal,
//                     }}
//                   >
//                     <Box>
//                       <FlatList
//                         data={customerCartItems?.products}
//                         renderItem={item => {
//                           const data = item?.item;
//                           return <CartItem item={data} />;
//                         }}
//                         // ListEmptyComponent={
//                         //   isLoading === false ? (
//                         //     <ListEmptyComponent />
//                         //   ) : (
//                         //     <ActivityIndicator />
//                         //   )
//                         // }
//                         scrollEnabled={false}
//                       />
//                       {customerCartItems?.totalizers?.Items > 0 ? (
//                         <>
//                           <Box
//                             justifyContent="flex-end"
//                             flexDirection="row"
//                             paddingVertical="s8"
//                           >
//                             <Text>
//                               Total Discount : $
//                               {Math.floor(
//                                 customerCartItems?.totalizers?.Discounts,
//                               )}
//                             </Text>
//                           </Box>
//                           <Box justifyContent="flex-end" flexDirection="row">
//                             <Text>
//                               Shipping Amount : $
//                               {customerCartItems?.totalizers?.Shipping}
//                             </Text>
//                           </Box>
//                           <Box justifyContent="flex-end" flexDirection="row">
//                             <Text>
//                               Tax Included : ${customerCartItems?.totalizers?.Tax}
//                             </Text>
//                           </Box>
//                           {/* <Box justifyContent="flex-end" flexDirection="row">
//                             <Text>
//                               Tax Included : $
//                             </Text>
//                           </Box> */}
//                           <Box
//                             justifyContent="flex-end"
//                             flexDirection="row"
//                             paddingVertical="s8"
//                           >
//                             <Text variant="bold24">
//                               Total : {customerCartItems?.totalizers?.CartTotal}
//                             </Text>
//                           </Box>
//                         </>
//                       ) : (
//                         <></>
//                       )}
//                     </Box>
//                   </ScrollView>
//                 </>
//               )}
//             </>
//           ) : (
//             <>
//               <Box flex={1} justifyContent="center">
//                 <Text textAlign="center">Please logged in first</Text>
//               </Box>
//             </>
//           )}
//         </Box>
//         {customerCartItems?.products?.length != undefined ? (
//           <>
//             <Box
//               padding="s16"
//               style={theme.cardVariants.bottomButtonShadow}
//               backgroundColor="white"
//             >
//               <CommonSolidButton
//                 title="Proceed to Checkout"
//                 onPress={() =>
//                   navigation.replace('CheckoutScreen', {
//                     basketId: customerCartId,
//                   })
//                 }
//               />
//             </Box>
//           </>
//         ) : (
//           <></>
//         )}
//       </SafeAreaView>
//     );
// };

// export default CartScreen;

// const styles = StyleSheet.create({});

