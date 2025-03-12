import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

export default function MasonryImageList() {
  const isLargeScreen = useMediaQuery("(min-width:900px)"); // Check screen size

  return (
    <Box
      sx={{
        width: { xs: "98%", md: "100%" },
        height: { xs: 500, md: 850 },
        overflowY: "hidden",
        backgroundColor: "white",
      }}
    >
      <ImageList
        variant="masonry"
        cols={isLargeScreen ? 5 : 5} // 5 cols on large screens, 3 on small
        gap={8}
      >
        {itemData
          .slice(0, isLargeScreen ? 15 : itemData.length) // Show only 15 images on large screens
          .map((item, index) => (
            <motion.div
              key={item.img}
              initial={{ y: 0 }}
              animate={{ y: index % 2 === 0 ? [-10, 10, -10] : [10, -10, 10] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ImageListItem>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: "100%", display: "block" }}
                />
              </ImageListItem>
            </motion.div>
          ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703066/img30_yaorbe.jpg", title: "jacket" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703065/img19_vcw7ai.jpg", title: "jacket" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703058/img13_eqo6qa.jpg", title: "jersey" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703059/img21_ww3kqq.jpg", title: "boot" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703061/img33_los0qq.jpg", title: "Jeans" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703061/img26_lzckxv.jpg", title: "bag" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703062/img34_ykgnqd.jpg", title: "pants" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703062/img7_x6cijk.jpg", title: "fur" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703063/img24_irmtxu.jpg", title: "street dress" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703059/img29_xhbotl.jpg", title: "cape" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703057/img15_rvhx9e.jpg", title: "trouser" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703056/img36_m10ngf.jpg", title: "sun glasses" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703058/img31_opok3p.jpg", title: "necklace" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703061/img32_dbyyw7.jpg", title: "dressed man" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703062/img22_f0bti3.jpg", title: "lady with the bag" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703060/img8_ukt5qr.jpg", title: "skirt" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703058/img20_rkqjaw.jpg", title: "ring" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703057/img28_dafw5i.jpg", title: "wood" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703057/img11_nkyraz.jpg", title: "gloves" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703057/img23_ndlgjr.jpg", title: "tshirt" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703062/img37_elttzc.jpg", title: "hat" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703059/img12_vyrv1v.jpg", title: "shoes" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703058/img25_uzurwz.jpg", title: "coat" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703058/img35_jlbpgs.jpg", title: "jeans" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703057/img14_tyjidi.jpg", title: "Carhat" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703057/img18_s5kvbx.jpg", title: "camerflag" },
  { img: "https://res.cloudinary.com/dqtrhmkxd/image/upload/v1741703058/img16_wu4j5t.jpg", title: "pant carhat" },
];

