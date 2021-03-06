package com.dungeoncrawler.Javiarenka.dungeonMapGenerator;

public class Tile
{
    private int x;
    private int y;
    private boolean occupied = false;
    private TileType type;
    //private HashMap<String,mapGenerator.Tile> surroundingTiles;

    Tile()
    {

    }

    Tile(int coordX, int coordY)
    {
        x = coordX;
        y = coordY;
        type = TileType.EMPTY;
    }

    Tile(int coordX, int coordY, TileType targetType)
    {
        x = coordX;
        y = coordY;
        type = targetType;
    }

    public int getX()
    {
        return x;
    }

    public int getY()
    {
        return y;
    }

    public boolean isOccupied()
    {
        return occupied;
    }

    public void setOccupied(boolean occupied)
    {
        this.occupied = occupied;
    }

    public String getIdString()
    {
        return (x + "-" + y);
    }

    @Override
    public String toString()
    {
        return (this.type.strVal);
    }

    public void printInfo()
    {
        System.out.println("(" + x + "," + y + "): " + toString()) ;
    }

    public String toString(boolean complex)
    {
        return (x + this.type.strVal + y + " ");
    }

    public void setType(TileType type)
    {
        this.type = type;
    }

    public TileType getType()
    {
        return type;
    }

    public boolean isWalkable()
    {
        return type.isWalkable() && !isOccupied();
    }
}
