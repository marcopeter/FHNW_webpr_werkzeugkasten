module Main where

import Prelude

import Control.Monad.Eff.Console (logShow)
import TryPureScript (render, withConsole)

foo :: Number -> Number
foo x = x+1.0

mid :: Int -> Int
mid x = x

mid2 :: forall a. a -> a
mid2 x = x

once :: forall a b. (a->b) -> a -> b
once f x = f x

twice :: forall a. (a -> a) -> a -> a
twice f x = f( f(x) )

main = render =<< withConsole do
logShow (mid2 2)