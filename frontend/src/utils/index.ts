// Storage utilities
export const storage = {
  // Local storage with fallback to session storage
  get: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      try {
        return sessionStorage.getItem(key);
      } catch {
        return null;
      }
    }
  },

  set: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch {
      try {
        sessionStorage.setItem(key, value);
      } catch {
        console.warn('Storage not available');
      }
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch {
      try {
        sessionStorage.removeItem(key);
      } catch {
        console.warn('Storage not available');
      }
    }
  }
};

// Validation utilities
export const validation = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  required: (value: string): boolean => {
    return value.trim().length > 0;
  },

  minLength: (value: string, min: number): boolean => {
    return value.trim().length >= min;
  }
};

// Performance utilities
export const performance = {
  // Measure time to first contentful paint
  measureFCP: (): Promise<number> => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            resolve(fcpEntry.startTime);
            observer.disconnect();
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      } else {
        resolve(0);
      }
    });
  },

  // Measure largest contentful paint
  measureLCP: (): Promise<number> => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
          observer.disconnect();
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } else {
        resolve(0);
      }
    });
  }
};

// Smooth scroll utility
export const smoothScroll = (targetId: string): void => {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Debounce utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Format utilities
export const format = {
  // Format phone number for display
  phone: (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `+91-${cleaned.slice(0, 5)}${cleaned.slice(5)}`;
    }
    return phone;
  },

  // Format date
  date: (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(date);
  },

  // Truncate text
  truncate: (text: string, length: number): string => {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
  }
};

// Device detection
export const device = {
  isMobile: (): boolean => {
    return window.innerWidth < 768;
  },

  isTablet: (): boolean => {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  },

  isDesktop: (): boolean => {
    return window.innerWidth >= 1024;
  },

  isTouch: (): boolean => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
};

// Animation utilities
export const animation = {
  // Check if element is in viewport
  isInViewport: (element: Element): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Intersection observer helper
  createIntersectionObserver: (
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
  ): IntersectionObserver => {
    return new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });
  }
};

// Error handling
export const errorHandler = {
  log: (error: Error, context?: string): void => {
    console.error(`[${context || 'App'}] Error:`, error);
    // In production, you might want to send this to an error tracking service
  },

  wrap: <T extends (...args: any[]) => any>(fn: T, context?: string): T => {
    return ((...args: Parameters<T>) => {
      try {
        return fn(...args);
      } catch (error) {
        errorHandler.log(error as Error, context);
        throw error;
      }
    }) as T;
  }
};

// Accessibility utilities
export const accessibility = {
  // Focus trap for modals
  createFocusTrap: (container: HTMLElement): (() => void) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  },

  // Announce to screen readers
  announce: (message: string): void => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
};
