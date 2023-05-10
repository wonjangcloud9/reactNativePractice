import { StyleSheet, Text, View, Image } from "react-native";

const Header = (props) => {
  return <Text>{props.title}</Text>;
};

const MyProfile = (props) => {
  return <Profile name="원장" uri="" />;
};

const Division = (props) => {
  return <Text>Division</Text>;
};

const FriendSection = (props) => {
  return <Text>FriendSection</Text>;
};

const Profile = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{
          width: 30,
          height: 30,
        }}
      />
      <Text>지은</Text>
    </View>
  );
};

const FriendList = (props) => {
  return <Text>FriendList</Text>;
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
