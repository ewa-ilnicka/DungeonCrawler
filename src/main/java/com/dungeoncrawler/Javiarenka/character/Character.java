package com.dungeoncrawler.Javiarenka.character;

public class Character {

    private String name;
    private int hp;

    public Character() {
    }

    public Character(String name, int hp) {
        this.name = name;
        this.hp = hp;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    void attack(Character character){
    }
}