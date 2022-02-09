<?php


class User
{
    private $id;
    private $email;
    private $password;
    private $username;
    private $beerLikeId;

    public function __construct(string $email, string $password, string $username)
    {
        $this->email = $email;
        $this->password = $password;
        $this->username = $username;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email)
    {
        $this->email = $email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password)
    {
        $this->password = $password;
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function setUsername(string $username)
    {
        $this->username = $username;
    }

    public function getBeerLikeId(): int
    {
        return $this->beerLikeId;
    }

    public function setBeerLikeId(int $beerLikeId)
    {
        $this->beerLikeId = $beerLikeId;
    }
}

function buildUser($user): object
{
    // TODO: validation
    return new User($user->email, $user->password, $user->username);
}


// TODO: overload konstruktora