import { useState, useEffect, useCallback } from 'react'

interface UseTypingEffectOptions {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  loop?: boolean
}

export function useTypingEffect({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  loop = true,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const currentText = texts[currentIndex]

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsTyping(false)
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        setIsPaused(true)
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timer)
      } else {
        const nextIndex = loop 
          ? (currentIndex + 1) % texts.length
          : Math.min(currentIndex + 1, texts.length - 1)
        
        if (nextIndex !== currentIndex || loop) {
          setCurrentIndex(nextIndex)
          setIsTyping(true)
        }
      }
    }
  }, [displayText, currentText, isTyping, isPaused, currentIndex, texts, typingSpeed, deletingSpeed, pauseDuration, loop])

  const reset = useCallback(() => {
    setDisplayText('')
    setCurrentIndex(0)
    setIsTyping(true)
    setIsPaused(false)
  }, [])

  return { displayText, isTyping, isPaused, currentIndex, reset }
}

