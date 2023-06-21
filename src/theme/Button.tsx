import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// === Solid button === //

const sldBlue = defineStyle ({
  background: "itsblue.main",
  border: "1px solid",
  borderColor: "itsblue.main",
  color: "white",
  _hover: {
    background: "itsblue.600",
    border: "1px solid",
    borderColor: "itsblue.600",
  },
  _active: {
    background: "itsblue.700",
    border: "1px solid",
    borderColor: "itsblue.700",
  },
  _dark: {
    background: "itsblue.300",
    border: "1px solid",
    borderColor: "itsblue.300",
    color: "gray.800",
    _hover: {
      background: "itsblue.400",
      border: "1px solid",
      borderColor: "itsblue.400",
    },
    _active: {
      background: "itsblue.500",
      border: "1px solid",
      borderColor: "itsblue.500",
    }
  }
});

const sldPurple = defineStyle ({
  background: "itspurple.main",
  border: "1px solid",
  borderColor: "itspurple.main",
  color: "white",
  _hover: {
    background: "itspurple.600",
    border: "1px solid",
    borderColor: "itspurple.600",
  },
  _active: {
    background: "itspurple.700",
    border: "1px solid",
    borderColor: "itspurple.700",
  },
  _dark: {
    background: "itspurple.200",
    border: "1px solid",
    borderColor: "itspurple.200",
    color: "gray.800",
    _hover: {
      background: "itspurple.300",
      border: "1px solid",
      borderColor: "itspurple.300",
    },
    _active: {
      background: "itspurple.400",
      border: "1px solid",
      borderColor: "itspurple.400",
    }
  }
});

const sldPink = defineStyle ({
  background: "itspink.main",
  border: "1px solid",
  borderColor: "itspink.main",
  color: "white",
  _hover: {
    background: "itspink.500",
    border: "1px solid",
    borderColor: "itspink.500",
  },
  _active: {
    background: "itspink.600",
    border: "1px solid",
    borderColor: "itspink.600",
  },
  _dark: {
    background: "itspink.300",
    border: "1px solid",
    borderColor: "itsink.300",
    color: "gray.800",
    _hover: {
      background: "itspink.400",
      border: "1px solid",
      borderColor: "itspink.400",
    },
    _active: {
      background: "itspink.500",
      border: "1px solid",
      borderColor: "itspink.500",
    }
  }
});

const sldRed = defineStyle ({
  background: "itsred.main",
  border: "1px solid",
  borderColor: "itsred.main",
  color: "white",
  _hover: {
    background: "itsred.700",
    border: "1px solid",
    borderColor: "itsred.700",
  },
  _active: {
    background: "itsred.800",
    border: "1px solid",
    borderColor: "itsred.800",
  },
  _dark: {
    background: "itsred.200",
    border: "1px solid",
    borderColor: "itsred.200",
    color: "gray.800",
    _hover: {
      background: "itsred.300",
      border: "1px solid",
      borderColor: "itsred.300",
    },
    _active: {
      background: "itsred.400",
      border: "1px solid",
      borderColor: "itsred.400",
    }
  }
});

const sldOrange = defineStyle ({
  background: "itsorange.main",
  border: "1px solid",
  borderColor: "itsorange.main",
  color: "white",
  _hover: {
    background: "itsorange.600",
    border: "1px solid",
    borderColor: "itsorange.600",
  },
  _active: {
    background: "itsorange.700",
    border: "1px solid",
    borderColor: "itsorange.700",
  },
  _dark: {
    background: "itsorange.300",
    border: "1px solid",
    borderColor: "itsorange.300",
    color: "gray.800",
    _hover: {
      background: "itsorange.400",
      border: "1px solid",
      borderColor: "itsorange.400",
    },
    _active: {
      background: "itsorange.500",
      border: "1px solid",
      borderColor: "itsorange.500",
    }
  }
});

const sldYellow = defineStyle ({
  background: "itsyellow.main",
  border: "1px solid",
  borderColor: "itsyellow.main",
  color: "white",
  _hover: {
    background: "itsyellow.600",
    border: "1px solid",
    borderColor: "itsyellow.600",
  },
  _active: {
    background: "itsyellow.700",
    border: "1px solid",
    borderColor: "itsyellow.700",
  },
  _dark: {
    background: "itsyellow.300",
    border: "1px solid",
    borderColor: "itsyellow.300",
    color: "gray.800",
    _hover: {
      background: "itsyellow.400",
      border: "1px solid",
      borderColor: "itsyellow.400",
    },
    _active: {
      background: "itsyellow.500",
      border: "1px solid",
      borderColor: "itsyellow.500",
    }
  }
});

const sldGreen = defineStyle ({
  background: "itsgreen.main",
  border: "1px solid",
  borderColor: "itsgreen.main",
  color: "white",
  _hover: {
    background: "itsgreen.700",
    border: "1px solid",
    borderColor: "itsgreen.700",
  },
  _active: {
    background: "itsgreen.800",
    border: "1px solid",
    borderColor: "itsgreen.800",
  },
  _dark: {
    background: "itsgreen.400",
    border: "1px solid",
    borderColor: "itsgreen.400",
    color: "gray.800",
    _hover: {
      background: "itsgreen.500",
      border: "1px solid",
      borderColor: "itsgreen.500",
    },
    _active: {
      background: "itsgreen.600",
      border: "1px solid",
      borderColor: "itsgreen.600",
    }
  }
});

const sldTeal = defineStyle ({
  background: "itsteal.main",
  border: "1px solid",
  borderColor: "itsteal.main",
  color: "gray.800",
  _hover: {
    background: "itsteal.500",
    border: "1px solid",
    borderColor: "itsteal.500",
  },
  _active: {
    background: "itsteal.600",
    border: "1px solid",
    borderColor: "itsteal.600",
  },
  _dark: {
    background: "itsteal.400",
    border: "1px solid",
    borderColor: "itsteal.400",
    color: "gray.800",
    _hover: {
      background: "itsteal.500",
      border: "1px solid",
      borderColor: "itsteal.500",
    },
    _active: {
      background: "itsteal.600",
      border: "1px solid",
      borderColor: "itsteal.600",
    }
  }
});

const sldCyan = defineStyle ({
  background: "itscyan.main",
  border: "1px solid",
  borderColor: "itscyan.main",
  color: "white",
  _hover: {
    background: "itscyan.700",
    border: "1px solid",
    borderColor: "itscyan.700",
  },
  _active: {
    background: "itscyan.800",
    border: "1px solid",
    borderColor: "itscyan.800",
  },
  _dark: {
    background: "itscyan.500",
    border: "1px solid",
    borderColor: "itscyan.500",
    color: "gray.800",
    _hover: {
      background: "itscyan.600",
      border: "1px solid",
      borderColor: "itscyan.600",
    },
    _active: {
      background: "itscyan.700",
      border: "1px solid",
      borderColor: "itscyan.700",
    }
  }
});

const sldGray = defineStyle ({
  background: "itsgray.main",
  border: "1px solid",
  borderColor: "itsgray.main",
  color: "gray.800",
  _hover: {
    background: "itsgray.300",
    border: "1px solid",
    borderColor: "itsgray.300",
  },
  _active: {
    background: "itsgray.400",
    border: "1px solid",
    borderColor: "itsgray.400",
  },
  _dark: {
    background: "itsgray.100",
    border: "1px solid",
    borderColor: "itsgray.100",
    color: "gray.800",
    _hover: {
      background: "itsgray.200",
      border: "1px solid",
      borderColor: "itsgray.200",
    },
    _active: {
      background: "itsgray.300",
      border: "1px solid",
      borderColor: "itsgray.300",
    }
  }
});
// === Outline button === //

const otlBlue = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "itsblue.main",
  color: "itsblue.main",
  _hover: {
    background: "itsblue.main",
    border: "1px solid",
    borderColor: "itsblue.main",
    color: "white",
  },
  _active: {
    background: "itsblue.600",
    borderColor: "itsblue.600",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "itsblue.300",
    color: "itsblue.300",
    _hover: {
      background: "itsblue.300",
      borderColor: "itsblue.300",
      color: "gray.800",
    },
    _active: {
      background: "itsblue.400",
      borderColor: "itsblue.400",
      color: "gray.800",
    }
  }
});

const otlPurple = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "itspurple.main",
  color: "itspurple.main",
  _hover: {
    background: "itspurple.main",
    border: "1px solid",
    borderColor: "itspurple.main",
    color: "white",
  },
  _active: {
    background: "itspurple.600",
    borderColor: "itspurple.600",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "itspurple.200",
    color: "itspurple.200",
    _hover: {
      background: "itspurple.200",
      borderColor: "itspurple.200",
      color: "gray.800",
    },
    _active: {
      background: "itspurple.300",
      borderColor: "itspurple.300",
      color: "gray.800",
    }
  }
});

const otlPink = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "itspink.main",
  color: "itspink.main",
  _hover: {
    background: "itspink.main",
    border: "1px solid",
    borderColor: "itspink.main",
    color: "white",
  },
  _active: {
    background: "itspink.600",
    borderColor: "itspink.600",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "itspink.300",
    color: "itspink.300",
    _hover: {
      background: "itspink.300",
      borderColor: "itspink.300",
      color: "gray.800",
    },
    _active: {
      background: "itspink.400",
      borderColor: "itspink.400",
      color: "gray.800",
    }
  }
});

const otlRed = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "itsred.main",
  color: "itsred.main",
  _hover: {
    background: "itsred.main",
    border: "1px solid",
    borderColor: "itsred.main",
    color: "white",
  },
  _active: {
    background: "itsred.700",
    borderColor: "itsred.700",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "itsred.200",
    color: "itsred.200",
    _hover: {
      background: "itsred.200",
      borderColor: "itsred.200",
      color: "gray.800",
    },
    _active: {
      background: "itsred.300",
      borderColor: "itsred.300",
      color: "gray.800",
    }
  }
});

const otlOrange = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "itsorange.main",
  color: "itsorange.main",
  _hover: {
    background: "itsorange.main",
    border: "1px solid",
    borderColor: "itsorange.main",
    color: "white",
  },
  _active: {
    background: "itsorange.600",
    borderColor: "itsorange.600",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "itsorange.300",
    color: "itsorange.300",
    _hover: {
      background: "itsorange.300",
      borderColor: "itsorange.300",
      color: "gray.800",
    },
    _active: {
      background: "itsorange.400",
      borderColor: "itsorange.400",
      color: "gray.800",
    }
  }
});

const otlYellow = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "itsyellow.main",
  color: "itsyellow.main",
  _hover: {
    background: "itsyellow.main",
    border: "1px solid",
    borderColor: "itsyellow.main",
    color: "white",
  },
  _active: {
    background: "itsyellow.600",
    borderColor: "itsyellow.600",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "itsyellow.300",
    color: "itsyellow.300",
    _hover: {
      background: "itsyellow.300",
      borderColor: "itsyellow.300",
      color: "gray.800",
    },
    _active: {
      background: "itsyellow.400",
      borderColor: "itsyellow.400",
      color: "gray.800",
    }
  }
});

const otlGreen = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "itsgreen.main",
  color: "itsgreen.main",
  _hover: {
    background: "itsgreen.main",
    border: "1px solid",
    borderColor: "itsgreen.main",
    color: "white",
  },
  _active: {
    background: "itsgreen.700",
    borderColor: "itsgreen.700",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "itsgreen.300",
    color: "itsgreen.300",
    _hover: {
      background: "itsgreen.300",
      borderColor: "itsgreen.300",
      color: "gray.800",
    },
    _active: {
      background: "itsgreen.500",
      borderColor: "itsgreen.500",
      color: "gray.800",
    }
  }
});

const otlTeal = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "itsteal.main",
  color: "itsteal.main",
  _hover: {
    background: "itsteal.main",
    border: "1px solid",
    borderColor: "itsteal.main",
    color: "gray.800",
  },
  _active: {
    background: "itsteal.500",
    borderColor: "itsteal.500",
    color: "gray.800",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "itsteal.400",
    color: "itsteal.400",
    _hover: {
      background: "itsteal.400",
      borderColor: "itsteal.400",
      color: "gray.800",
    },
    _active: {
      background: "itsteal.500",
      borderColor: "itsteal.500",
      color: "gray.800",
    }
  }
});

const otlCyan = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "itscyan.main",
  color: "itscyan.main",
  _hover: {
    background: "itscyan.main",
    border: "1px solid",
    borderColor: "itscyan.main",
    color: "white",
  },
  _active: {
    background: "itscyan.700",
    borderColor: "itscyan.700",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "itscyan.400",
    color: "itscyan.400",
    _hover: {
      background: "itscyan.400",
      borderColor: "itscyan.400",
      color: "gray.800",
    },
    _active: {
      background: "itscyan.600",
      borderColor: "itscyan.600",
      color: "gray.800",
    }
  }
});

const otlGray = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "itsgray.main",
  color: "itsgray.main",
  _hover: {
    background: "itsgray.main",
    border: "1px solid",
    borderColor: "itsgray.main",
    color: "gray.800",
  },
  _active: {
    background: "itsgray.300",
    borderColor: "itsgray.300",
    color: "gray.800",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "itsgray.100",
    color: "itsgray.100",
    _hover: {
      background: "itsgray.100",
      borderColor: "itsgray.100",
      color: "gray.800",
    },
    _active: {
      background: "itsgray.200",
      borderColor: "itsgray.200",
      color: "gray.800",
    }
  }
});

// === Ghost button === //

const gstBlue = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "transparent",
  color: "itsblue.main",
  _hover: {
    background: "itsblue.main",
    border: "1px solid",
    borderColor: "itsblue.main",
    color: "white",
  },
  _active: {
    background: "itsblue.600",
    borderColor: "itsblue.600",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "transparent",
    color: "itsblue.300",
    _hover: {
      background: "itsblue.300",
      borderColor: "itsblue.300",
      color: "gray.800",
    },
    _active: {
      background: "itsblue.400",
      borderColor: "itsblue.400",
      color: "gray.800",
    }
  }
});

const gstPurple = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "transparent",
  color: "itspurple.main",
  _hover: {
    background: "itspurple.main",
    border: "1px solid",
    borderColor: "itspurple.main",
    color: "white",
  },
  _active: {
    background: "itspurple.600",
    borderColor: "itspurple.600",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "transparent",
    color: "itspurple.200",
    _hover: {
      background: "itspurple.200",
      borderColor: "itspurple.200",
      color: "gray.800",
    },
    _active: {
      background: "itspurple.300",
      borderColor: "itspurple.300",
      color: "gray.800",
    }
  }
});

const gstPink = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "transparent",
  color: "itspink.main",
  _hover: {
    background: "itspink.main",
    border: "1px solid",
    borderColor: "itspink.main",
    color: "white",
  },
  _active: {
    background: "itspink.500",
    borderColor: "itspink.500",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "transparent",
    color: "itspink.300",
    _hover: {
      background: "itspink.300",
      borderColor: "itspink.300",
      color: "gray.800",
    },
    _active: {
      background: "itspink.400",
      borderColor: "itspink.400",
      color: "gray.800",
    }
  }
});

const gstRed = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "transparent",
  color: "itsred.main",
  _hover: {
    background: "itsred.main",
    border: "1px solid",
    borderColor: "itsred.main",
    color: "white",
  },
  _active: {
    background: "itsred.700",
    borderColor: "itsred.700",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "transparent",
    color: "itsred.200",
    _hover: {
      background: "itsred.200",
      borderColor: "itsred.200",
      color: "gray.800",
    },
    _active: {
      background: "itsred.300",
      borderColor: "itsred.300",
      color: "gray.800",
    }
  }
});

const gstOrange = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "transparent",
  color: "itsorange.main",
  _hover: {
    background: "itsorange.main",
    border: "1px solid",
    borderColor: "itsorange.main",
    color: "white",
  },
  _active: {
    background: "itsorange.600",
    borderColor: "itsorange.600",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "transparent",
    color: "itsorange.300",
    _hover: {
      background: "itsorange.300",
      borderColor: "itsorange.300",
      color: "gray.800",
    },
    _active: {
      background: "itsorange.400",
      borderColor: "itsorange.400",
      color: "gray.800",
    }
  }
});

const gstYellow = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "transparent",
  color: "itsyellow.main",
  _hover: {
    background: "itsyellow.main",
    border: "1px solid",
    borderColor: "itsyellow.main",
    color: "white",
  },
  _active: {
    background: "itsyellow.600",
    borderColor: "itsyellow.600",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "transparent",
    color: "itsyellow.300",
    _hover: {
      background: "itsyellow.300",
      borderColor: "itsyellow.300",
      color: "gray.800",
    },
    _active: {
      background: "itsyellow.400",
      borderColor: "itsyellow.400",
      color: "gray.800",
    }
  }
});

const gstGreen = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "transparent",
  color: "itsgreen.main",
  _hover: {
    background: "itsgreen.main",
    border: "1px solid",
    borderColor: "itsgreen.main",
    color: "white",
  },
  _active: {
    background: "itsgreen.700",
    borderColor: "itsgreen.700",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "transparent",
    color: "itsgreen.400",
    _hover: {
      background: "itsgreen.400",
      borderColor: "itsgreen.400",
      color: "gray.800",
    },
    _active: {
      background: "itsgreen.500",
      borderColor: "itsgreen.500",
      color: "gray.800",
    }
  }
});

const gstTeal = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "transparent",
  color: "itsteal.main",
  _hover: {
    background: "itsteal.main",
    border: "1px solid",
    borderColor: "itsteal.main",
    color: "gray.800",
  },
  _active: {
    background: "itsteal.500",
    borderColor: "itsteal.500",
    color: "gray.800",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "transparent",
    color: "itsteal.400",
    _hover: {
      background: "itsteal.400",
      borderColor: "itsteal.400",
      color: "gray.800",
    },
    _active: {
      background: "itsteal.500",
      borderColor: "itsteal.500",
      color: "gray.800",
    }
  }
});

const gstCyan = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "transparent",
  color: "itscyan.main",
  _hover: {
    background: "itscyan.main",
    border: "1px solid",
    borderColor: "itscyan.main",
    color: "white",
  },
  _active: {
    background: "itscyan.700",
    borderColor: "itscyan.700",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "transparent",
    color: "itscyan.500",
    _hover: {
      background: "itscyan.500",
      borderColor: "itscyan.500",
      color: "gray.800",
    },
    _active: {
      background: "itscyan.600",
      borderColor: "itscyan.600",
      color: "gray.800",
    }
  }
});

const gstGray = defineStyle ({
  background: "transparent",
  border: "1px solid",
  borderColor: "transparent",
  color: "itsgray.main",
  _hover: {
    background: "itsgray.main",
    border: "1px solid",
    borderColor: "itsgray.main",
    color: "white",
  },
  _active: {
    background: "itsgray.300",
    borderColor: "itsgray.300",
    color: "white",
  },
  _dark: {
    background: "transparent",
    border: "1px solid",
    borderColor: "transparent",
    color: "itsgray.100",
    _hover: {
      background: "itsgray.100",
      borderColor: "itsgray.100",
      color: "gray.800",
    },
    _active: {
      background: "itsgray.200",
      borderColor: "itsgray.200",
      color: "gray.800",
    }
  }
});

export const buttonTheme = defineStyleConfig({
  variants: { 
    sldBlue,
    sldPurple,
    sldPink,
    sldRed,
    sldOrange,
    sldYellow,
    sldGreen,
    sldTeal,
    sldCyan,
    sldGray,
    otlBlue,
    otlPurple,
    otlPink,
    otlRed,
    otlOrange,
    otlYellow,
    otlGreen,
    otlTeal,
    otlCyan,
    otlGray,
    gstBlue,
    gstPurple,
    gstPink,
    gstRed,
    gstOrange,
    gstYellow,
    gstGreen,
    gstTeal,
    gstCyan,
    gstGray,
  },
});