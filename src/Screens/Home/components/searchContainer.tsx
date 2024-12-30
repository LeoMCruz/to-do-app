import React, { useState } from "react";
import { Input } from "../../../Components/Inputs";
import SearchIcon from "../../../assets/search-icon.svg";
import { SearchArea } from "../../../Components/views";
import { Button } from "../../../Components/button";

export default function SearchContainer({ setSearchText }: { setSearchText: (text: string) => void }) {
  const [storeText, setStoreText] = useState("");
  return (
    <SearchArea xSize={90}>
      <Input
        xSize={82}
        ySize={52}
        placeholder="Pesquisar Tarefa"
        value={storeText}
        onChangeText={(text: string) => setStoreText(text)}
      />
      <Button xSize={16} ySize={52} onPress={()=> setSearchText(storeText)} >
        <SearchIcon width={24} height={24} />
      </Button>
    </SearchArea>
  );
}
