import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

interface DownloadPictureProps {
  onDragDown: () => void;
  style?: ViewStyle;
}

export function DownloadPicture({ onDragDown }: DownloadPictureProps) {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        snapPoints={["97%"]}
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        onClose={onDragDown}
        handleIndicatorStyle={{ height: 0 }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
