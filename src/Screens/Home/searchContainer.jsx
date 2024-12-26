import React, { useState, useContext, useEffect } from "react";
import { Input } from "../../Components/Inputs";
import SearchIcon from "../../assets/search-icon.svg";
import { SearchArea } from "../../Components/views";
import { Button } from "../../Components/button";

export default function SearchContainer() {
  const [search, setSearch] = useState("");
  return (
    <SearchArea xSize={90}>
      <Input
        xSize={80}
        ySize={55}
        placeholder="Pesquisar Tarefa"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <Button xSize={18} ySize={55}>
        <SearchIcon width={30} height={30} />
      </Button>
    </SearchArea>
  );
}
