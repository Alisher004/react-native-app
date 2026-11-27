import { Text, View, StyleSheet, Platform } from "react-native";

export default function Index() {
  const name = "Asan"
  const skils = ['js', 'react', 'react-native']

  console.log("homescreen render", Platform.OS);
  
  return (
    <>
      <View style={styles.container}>
        {/* <Text style={styles.title}>hello react native</Text>

        <Text style={styles.title}>hello i am {name}</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>my skills</Text>
          {skils.map((skill) => (
            <Text key={skill}>{skill}</Text>
          ))}
        </View> */}
        <Text style={styles.title}>Чойро даяр</Text>
        <Text>Oc: {Platform.OS}</Text>
        <Text>version {String(Platform.Version)}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: "red", fontSize: 50, fontWeight: "bold" }
});
