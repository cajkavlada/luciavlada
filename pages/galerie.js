import React, { useState, useCallback } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Headline from "../components/Headline/Headline";
import ImageGallery from 'react-image-gallery';
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0px',
    }
  },
}));


const photos = [
  {
    src: "https://lh3.googleusercontent.com/qhGgp8PlFOEuNwBnsZSmTXsqM9_4KcF2zofNInpwL6kKm5uQ8AOuHpYA37PXDonhNLJY9dmVOrp8wxTSRijBd-044fFw7FaPM9ZrVLfFBfOmgKeLznvuYbVzgDxvTLkFJ_EM4ZnBbRioqBbmYsRdgsyxgHBTkTfT-L5NOOzDZhayJIqJVlhnxyei1z6cq_kU7tJ-INd9wnluwEttNzFlgVKZeody8MClUncr6NResCA8I73Ue90lZi4JegLDAFMCMnIgZ16qMKVS-b8eZOqMpVkBGF2HOKDeA6pGWzGRAyyzvY6OxC0Fg1H3C5b0c9DnPoC1VpkQWYO0K1CrmFcMvCdWgI-lLID5VGeiTh1TwUPxQf7TCps64wqnTeFJZxMmrbZ1Ya0eidMe5NI2gSpPw8gLgGbz7YKQ4ASHxX9_Nds0L01uk-q-orakalbuBmCwFntmpe5d6-hO8vy0p2noWBPQ3hTKNHfYHZfzspduZ1kri8eAbQq693dLtb1uqIdDLVAifl5HIWgk4xMAjEhdwOwGH3aui1aDQqiUkL-9GDTUAwAv5K5xbvMAfHa5bTznZlXOoRmDMQu4lf2FyEj9bWiX4Qi3xD9sFXyUltHa-mwKCa2obMvgO60FmXilclJZRnZONzSlY2Vw51yQj-v0NcCYs-iC7LzD6IrZMSzjy3t3EdCjqD-c-QARxkieGMXkD_UIsZGk6nY1_BbKmmw7EvFP=w1098-h732-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/rWT8ysTMAkKBCoImcskrfxgLhypFCyNF4CCrXMsQI_HOAov8GQyoN2kCU1VqmxIVprGLwp8XSZfhqfKVImjBm1VCwh7u0QBUCpmLpTlrH0NZb-IUwSMvxDLesWdL5KunYgRraddcuuF6Mv3km2XdgJYEvVjibFMuvK1Vxgpepk0Xr4NlUw-2JjVVKAArhXsoYwXKjhTNirsulwYPvYde6t0D5ITI-oaqD7TWQAJNFnq64L1cFrGKZBrbetZ4Z4O7ozOyLOBPB5wjldlH5rRUx4aRk88dG7zDLJvWJ1LmZJmTa6x1gaX4QovAGeNZRVS6ne8xsNkP3RomCQOwa46pnzxLig2nur1swt_OVINoXIcTxyu4C0QRYCnUzJ5AEw60L5VRDcl6FTVoc47ObSF2QoFghXIwbSyKLojrNXA_edOp_paJztm-q8CxXEHN6b6iJtUNKqEgZdjlqSaeXhK6WKzrvNzEcNeWukorJmWG35A7NyuNMTuTDglZI4ejqMrP2SnfzfYCUbUbUioQPD0FCPfmonp_uk1n2fCgJBRf2bhlMFxdmb4gEQLJzai_at2rGMnaaYhrYLFjM6doZBF_6bwBeDPHfYQo6PvE3X7O6GJ8IEplmRJn2kaEkG6SRAK-PdTiRiFrlBtoe2DJFDcfCKYiUGZM601aBgXLk06P7ODXzHplLHUXdBRRI0VWRriVwXmontODFEBSGW1LfFxJgaF2=w1097-h732-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/Edup6BJbyZ45WIX4l7lbApQbFNhCZidP9w-PB5Q7eI83wT29j4VIUf-QoRH3KHLmbLys5hsBbcfpe2UtdznC8tHxO0MP4HAXzscce2nRut7QmMf0SmJXr3yk9MMnzZX_pxdHsTe9vhb7BIHlOVKLv5w81WDopuCABo8Fob_JqllrS9vZgj-VNB_gEHI66NLIrDwgVopXLrnDiQJxILRSeOYw_6cYsQYLpmSkJ3Lf8iIDljD2N-UEulntmiBuMwdx04_nFIJGRoUqW9pCkK77W_wmYRamsHtkVUrcWD_DqJaSBWAggKXgmlrFkPTvoiWA2URxfeBr44R7DrTiaTobjBULYCg0FpfcXnahUM0tWRE013cSfcZuUpo7Z-KuT6BssfkulHSK81I1bRZvxM024P7sE0NtmIw0mnMxlQ5WQV8GgG2ztHijyApqarjK7vpOCnwaqgjwmM-dr2qTW0iPpSWu4nh2a7nWCdmdm8EQWoRZ2olLVpQ5yLGaUBA97fmVo90Aa5GK16E6bVcDk3JNdV2qfwkMBppvH1V2xi9a2EVx10Gw3peYd2mzkm1sPtlBWwOycHbkdig6JG2j0E837cT1N0FGkODN3szWQo2E0oN0i783ZwiNkcQoyVjYuYdQL8pKmnU3_rgFmkrhi1RA8QsOQwR5XagF61M2vZ8WQJPaqNCJ7SOn0c2nWM4VphT1Ll77TR6Wv_iBjiD-96c2fDk4=w1098-h732-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/nxINveKU74gx93VmltOZFD8IOTlIHbJrLCX1huPpQSozab2I_brkmDicwyVRtTSM4IGhJXRApflv1YS3MmHv49ndr2Yr4-HD4vXziQASr2w9IoAhwmYOREWnxwIasY6q9v_zsvjHpWlj9JJ9vH2Lnn3kykMNYXm127DmHSRjfTL8AMZLqfVOn5WgW5DRRLbSHZY8wWR3w3c7MXAJRM9KzlvGkZeRhDnK37Y890o9NFU_LjvLWl9omXCqnyIY-0NuMz0FCxR2vsYC6WLRDDEqCpWUYIbvz2cX2DH4mQaq7X74uiBz8fWpwndQB10z8sqFl1xyv60OnmfhCO20wUCcNKuzSA_ikOXaYsT9HhbRc41Qu4ZWftnel9TyvsTqLsYsHS9EeQVPb78YYrMTJN34vKlcG8tola_K2scSq7T01b5LMN5nqstOId6gTqvTau1Te56-N6T0Pe65lfFCMhdQL0OY0-mf-U7VUKuxC1h_kUoFH7Zt3G7lwZNgoEcaHpwlmM1U2sLzEBLBQBEW4JLSJUq3Lp--i3adCYNWBwiskeVNDBx5xG2MVR8zEsUUVfadTMBd8uV3bSE_XHogH-f3xPVKQf70dB0RvLuaTm172ganV6ETL0wVS9KJCWxKyo0c4b3iPQiLjLQorG1Cdls5fXDDqdrMNdq_sDYPgmJz1pG9QJjsd8XLjpwQCG1BrfZTysF9mNoY36MTq6TFKyJzyVlA=w1098-h732-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/cthwwlRUYRn5LKVqZEzFHaPJk3qAdAFXqCyYcovxi3lh1ESOUnC8JJkwQrFY0uDV0j0Kg48CLJ3LbOs11Hd9o8q_S0647doCfJ1pTZ6KnlmKPjuqfpReq9sRRHbMPChO5VW8A1aPEkb9UdbQ3R-3Mv2ntSiNa3X6q-Q9CqA_9hmottR2Z2sjJpJ11ngD3a37uyAd9eZSJtjsIpCYuCdeg_8IUAwQUlYTt8KFqBcdvquQgQCRii22p_miQwyzK0l_GuALP46Ui1YM7GJBEJRRIr8YkBanlPovkxsdAIeidgAreFIiC3zdFkvOJUJV7rRY8Sfv8nBs9hGQbGEWPkRwUQ5_nFddXv94bFj8Fceu8KQmL1ChxScuvSLy2ivyNeQNAGoeakMJUv5N9OV73qxo8_2ER1JXVWv_yd9xvmxpNARXR8jlZC9xMydbXjHT87bXwgAaeoqDn7BZXZ39hNP0i0NyaQ4HE9aT6VVVUSdTn03BxFkEvj3joVLtaCzO1SP-n7K5ESlYxps5tS-GhIY5HT_fVNvTpEDGR2mFWO5Gy7wc8DHhAiHALkeXJB5-ODjnbTqeAApK69mQJ9qDyBOU6SyMATx5bnp2oGylN0YIfL3L3L6jZ97xRdnKfW_ZAmgTRoR2blcoN_jIHscecfhu-a-e8Q--c7BADv94D5konPl8407OlsvAdmOV9yIiJxGu-_j9tkjJ7c0hF8uNW8bECAOi=w624-h937-no?authuser=0",
    width: 2,
    height: 3
  },
  {
    src: "https://lh3.googleusercontent.com/FY3Vu46X38OV43kM9W444kzd2aQlwjf9gBBP9rupUT-MUPlXiJM4htpDMKicRyZ1oFKflyMW-TPvsfcRc6atraS1rMT4ZCc5rsYviDMPxoyNccUMEqd0UKuHGmqrAiKuJCC7TvP8ZqCMau2gguco_4YAA1FryjI6Pisk_u3a-Y7CwRLoAYNFAgskWsJr-EisqdL1ae_foSmMMhELJKyNEjvyYka16S9lO2JQ6_72VKpvFi2wjvCOI6xbL_Qkgm4v6x3ejfHk3giX69iuv89xfZXSx6f4gfbLjcJqNR6It2-ya5Gbb8g67weFWtS3yTCaeRyGtZ5CS1yGYhf9qLSnbJ5J58HPEWF2MySeAepSiZeUMCWRpDgXauKhZDpWj5siuzZcHdcTAFUI4Cv_l_ydYbtn6g0p7zko21aXoh-xn0wBd5w4BM3ISbBeKMv3OTdkd2LLNgJWrJPkxjx3QA3nc1gFaGyc6eEVx4m4CN5qJWfTTv0d821FVT5XWHP73UoCDv4ooxVOeIvWC2S4GVSOinl-JCWqsBpkiZYVQVNF11uMYcesPOtlwhagNPXTJxnWEbclImcPW9JL_q3s9kxOUIFlxu1xPxH3N5f3apwsSg7K-nHYkIlWIQZdaxhnenXeMDpViLjP2ICATNt1ClbqSQSWrtKL2LNDp6IdeIJXsyZyE6g28YWqoqDLAme2KdAwMWsLWLF7yrAxvyu7eaup0e2m=w1408-h938-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/PFQXyq3IUStLptzP61LYDZyqJjNRbRjiSnjNDIBR2XvYI4_jSQn1rM4JtSyYJslwgB0Ar8jZYWW16S0hjVMN4QWpG-uAOuMO5gAWexfook-gRuzQe_-wwB3iBdyGmEGLPxpu0fmlucG9S39E-zHVVoYYWSG351oZM5vfiLY-hYpHqc7Y0P97Q6-9xayVCreyWfU79esm_8WUd8uf_lTVPjrWw8hXSOpgjRTkOHS7hmQ82mnE278qEtkAVS6jwragDTFD67D1TFfvBT9hkSQ3C_3wcqeNs8JjewwGfw8lot4WmHvNnq-WDaF7g6_RHZ18Mf_SfgZ_bpnSaHCfR6hs-ErOCoszky9NZlBS9yqcpuvlIezzGw_3q9Dp48BxP5BJ7lnChmR0WW7GUkbqbnT3708gvgHblFVYiDtU9yMxvj7uYT9xX6DgphMfRcWFnwPs7YL32VDN5KjlQcVgtAfVYeGKusVt39xODxYOG8uVTudyh8ayREeY7K2b_qpkqPwIZ8iytkKVGhP0x22pAEntGH__NLMJHuIYiK7XIZUe9UrZioj7brZ4jcty4U2AxN_70NjVdhZJDzmuVIdXOP4veEtYEn7oCxNpYl3P8nDE8LvGfZ6Ce1ZJQFU4c4ndJv8LzNcePUSyK3FXMf4kx06iGpqA0yZOnffXgQLbts_q48P-QsyawCPYGL0IeELR1vWS7SKWlRc3c2jpUE8jqoOqAs0o=w1408-h938-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/cVyu7dAP0VSAsPAt3AO-FS25yc71zXvnDO6frm3b3utbE3lqGvafZXts_UShf7Q59E_7epVhnLSIxQafgArOMvNIgxghhwIELZavqFexBmM3-M8MFvomJ09Vf67JDhr-QHTTSNy49oxOJBMadreI9RUXqSCPdYPK8tIOTeCr1W2hlPwjf4rJPnCVnK2SCbc4WqkiNxj_8Kjn6BabjoSU8lDnDzvXQVxSbkEQQiXF5aHvV33bRQJP_3H8Sy1NIHPvRo0VCM6wbFkex0m7TyUjsuXKS6NhkLUKMWSK3qFAgnUTSKSVUd-CP4t8dZkEIJ35pCAhkoe4qK9828W_NLRdn7Xe7_tKLQQAaYRNF_CoBXBkzyz-o7tWIrp3DHDdSM1ocCPFx6ZVl0eELRTvgrF1w_SGXhde_unii7WVwQ9440cJkPztfb4goSemwUyjujzrH1_TOJxrtD8Bfl4PVrF5Lwr3889BBm-Czo3yCjk2EsHXoy9G9Z23GIXXo5qvsGxgBeJE2AmvOZMdV2-sX8WgNUyD9xN-q1y7z-OHkJJWaIDfpxq-719qJohHjQICeOkH9322jQVAK9JROGvU3qwHfbkBdno9LWk4vPQtr61KbwvbnFubA1vv02vpFI2XWN-MdA2bdX2hcWUT-E4RX-VGNk-vu6z1G7hjG7y1ii5fOKD-yT0o9_XvZsyk7ZisLJhKLmXwBcLzu5vBL7vtnf5tIs49=w1408-h938-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/HCPLW2mOCDQFQt7cyA5y_4DLcQKqonMHDOKGzbeYr566uHQUd5W5kRIxBbq_WKZ97_ihMvRakK1kgqvggwjmVu4Qbxglld2xJvN6l52WHh3LVP570sFWXanuiu-NaLFESWhMri2smWNtvvJH0rjDTG9vsawmmV_mFKmU2XQeU1PglizetkkixaNStjXKeA3iSr2XcIVPo12_lEnnkr9V8PDG8y-E5Ojj-zAAF4gnUaustlIVWkvZ9dyht9yvFH1BXEn6mXVfnVUFHaktaKdusjxEaEYOTlbjAfT-jgSOE4Tjud4CuR8RXAQ6S3OYSCxnvh7zEj4j9t8DfRuJiZaewuo04bMa6dN9Bj27s1WqJRmuXMv3gwLENJy01KFHOB9Fgb2dTf5eW6n2lODuz2MXXB1t8S1GjhqfW13_-j4FSqFjb_wRRfxbFnWnWRwszVVWKhXkh2ofOqTBwgEs_AhAXZN-PiOjykhWVjjadRN2SJZjYC3P43IhKisJyFKKvFEf1J0Eekn22JfRxpUOM38X-yv9Fy_XN49_CV-kTPWaca4CvIG91FO9uM1XNZQ7h79nx41lVPDx4gHukm11yNAvBOA7nQNFfyHH_ckyuLAFPpK__TJ1vxa00vQwFs56e4mbQ_Ewvt6i7XV04mk7xY_EwUBqiJoceFtO1NOcyrAsIeG6IddEza_DfBkegQiudqrTwgyaS5dBG0A2tLhHkPPHdoRn=w1408-h938-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/9IOLUlCetbnzU0c3AWwskCPGCsw0T1fb-GyxxidpLxHCsyuDx1qrhwtxv1jO68OYz6dMaKLchLSKbBiMuD8-5zI6lfVUVY6YPDR8tiExxT0hZxK1KqYRggE6DRiGWXlajORdhjsLaA1jNvcyAPuzkAkByI49JKwtFOUMmPFFLPkfJ5TOLOq_0Hi-2qg2On_ttUZ9SvnbE4oDsRDw7ZhQI3bi-6Cj5caeBJMmFdnxLmPiNQJr-JBcEpVkeWsshD37IxpYLQ5FJa5w-K6yOp9YSq77qvnOQWyFH3rfD-SNyB9-mhdwImPrIEyYJ49C4KQ-O5ERtlaXiCam-nwNt_kgo8TUrGdVYcwnuRSWRPLs5rvjuQHQIod8GyOOrMQ1bi0ZfBfsLA3fskWQCLpHJ6cIeIOgO-JOsfPxVkJ-2Stly7ZGqUDrU6sYWPHzh4WvFjr6wQrdRbPY0oqdhh431kpm6fMx6GOZovucH7JC6EebPJ7oViFg5yCRhBk2JuknAPH7i-aYOoLrFZgqK0nd1Z_fpoFS2W8WKk_-QQ_inh4v6bp2w5sCqiozCGpeH2psbdQdmjSx7fw0wY9qo2n42w45BEbWAOaV7s2-Ysoecu19socy8wz_QYLFcS_vT1bQKNL-4qW5GKnXt0ISxBwHlZ5JE7zwMZbhBPjwxDYyIo-IO9GoSjK2xBmCUrs4oA8Ws--NFcFGJFZNVVdudFqpqAAkwPbj=w1408-h938-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/lhFP-NJgq3FplNg2gfbYLuJ2HB2UiY3hEfUchJeMukyOKgVFfztjYE6-vl8Bw-MSzoZ0X8rhtD-L0j5DPHxYCkOEomYWlnkfadmHWeFupnFiM7bWe9TIUgebhPgZ9iNtbkqN1wlbjRBp0MqzfYWvpaBXRokEE3dUuHpMAo-8PXbK7aaOq7Q1c7R6vFb8blEpMncD4X8ggtbZsKvk2xZkYS_IDVv6XKEsBpqBkB-kRVaIbnqF798ae1j5Hn9wSZh4k9OKtxG5eP6aEZ7vnqG84QN_BabpQYgLP6a6GrCLy4dkKEieyhbBwGwWhnsslefVq97tJ1NMSPewoH6IdBS91r2QMYiQf-rxqrnJ1ZN0nSMlz40-_x92E6sfIQ4IgTPUrvKZ3DXzazTGJkCnjyrwHk_XZDlJnHszLQ4WOT04Zo_uBcHcqWh4AGqrg4GRjIcbxyl4ckJ4pkLrln8ztP_gYmZ_kNU6sD8krYZPaYPscHPvEyw1dqVj25clKAkRhtMrxvlCSQ9Jk8ikg5Il_Xw_muKEu4sGQEmgfWDMiQMtw9Kv-lRuJUfID0iCnvssrEcBum0OPdbAFyN8lqdtE_Kg8LBdi1hRP2RsfVd0ghOnzCjv2dAIJLVrc6lGwMsqc84R7j71fMTTafPlBOQruucfQ6Zs9ZCiWZkbEDQHl1VafMntUChHzkRVQ3IIgAPhQN4E49f_3Jcg4d9PEehhdQbSHvMb=w1408-h938-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/f00ZZZusRhRTlr6PY2QdxCMfNZu6m5i7gcwxd-v2d1DqGTZAv8E2wsezgRd8uP2PTFeDc-x_FmBH3mB4a9kHm-aeFR0p0Nboe2jsm2r6a3nnD9yI7xObu5H5yRjFXzNOYak6ZGS-Uyob0Md25sHwIwbKwhRa2BHOsr96L8cDEdeWhPabhmZrYp1PwVCW5SXcNP6ZUEpjfBGi_lKhGTPTVa4V_ZJEKeCfr-d4nW6RNUxmeTgttD0sppRQ1d-gtp92sdntwf_kSzAs_41xtg8ilF_hfEPFRg119fXWf-dqSYFqN411nqAca1nXlV-WfIcXAcJcb-9U320sfqPt7Xx71zulU2YpaZpnmKcLOZiH66YMwcv8WGBT7jOCOqK60git_kctJeExmxZX6IIBtOmNmvv0hXpN7M9H7CUC-MhVQlu4nMk-nEnX8qd7iILgXh0kFK8zxmT_2J4NsmY_47Gif8wE7JUlWeeQmEcvjnv7Q1wyfjl5nKU2i6h7Td3p-kX6zhP3JqALgK_UHetjp57Kmk3snHDjilZU5LFfqiM6TQIJTC4tMgQSkKuvFsSkv2_yTP2eyq3GqyjGuARxSeRdJrvJbs-E51Pum51uFuKaBi2uAlu5ik2CgEt-Qblf9YwmfLjIYOrhtKNI9210DbuQAwXIzCh4MjntDTwdYNUuNhi-5S3CHzEhjQpG4F-Kdq7lU5WE7G1lEV-I9lgUW0cDbYmr=w1253-h835-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/oZuVlxFsoH47aN1MB4N41AdzusvCo57Y5FND8W9eD5UoGzbXkqd0G5Az3UacZvnALVU7tZQmvt3If519IxVLoCC3iSgIpxarOU4Rwq_gf1iGwoFJYaQDOXe2T0woaTis1F7Eo-5JOOUM6ALZ3QUPlj-ItwC283Htfzb9NwRdJWlXKMxVqWKn-RZw57ApU2K6J5VqMpwmAPqpykV0N6K-Y9nW8y2SwPVXdndV-EaxPPiItzx-fgy8v6ZRVbxYrzIYZmOwKZuhefkyJpVj-SButBOGQznCRQUS2aaqPRNxMapzoyhd9xZ9mb2xHIfrBeYIEeB_NCwv9YTnMcQoGRhbYbYiQW5wZrSJi3LK5aCEACG-Mgq4BGKCn9c__TtuJkYfb8Um0GgpP9p5Rso2cIiasgefnXvwmmsOIsb-OERSR-VW7YSqSu0wX8VmVTNbClsWMmtwj8mGMntNmXBhR6U_wSdN7iZTgvTYh6m9zVqxpS-rGtVi5IQWR-jEXpJYk_ZyULXrKNvpSDqQHuKPNM_FF9gc-02pQVuhJKSrmfLmu_bldLzH3OsLzYcwaJkGXnkcfzUOMy5AwgxBRrD65PECWv5gYtLcXE-vJfqkXJUQokNd_UnzfRHQYK4sFSGVAW584YSblLLiDYwtHju04L5b4TvZnb-p8Qaxm6XCj3eG6_QkPhrcBW9Z9Dav4n8F4GVcnw_NphpXCwaAGPYjXj3wFMAK=w1253-h835-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/R6q9f61k7u3dXBnO_glUZNo-zqDMbYEPtq6O-4FKqeGPsDB16kcU89bS_wq16M0TaVMiZVpS8wTqcyAlrol9nzAUqPS1RycEkVpJDHlqTLVVTRqvZLi09E-Wa5zipi3c4HYBwc4IJk_fgJrH7epFkX64tvRe08syKAZOhcqzcb4ME2dQj2vvgL1IidUCS8KSX0WWHnNjDhBQLpxs7FmoHbsJPj3oGaWfB42GEaYHHkJNg3qOZgwR9xrWXZPPAfGjGYpAoAl_1B_ts5a9xpv2VQ4jP01AvJuN6UIq2Qu6_RYA_fKcaFftolZgZFKCUky4l8OCtoI9WwGNxIgwLLWJSbTialjxfRtOvX-NC2Q80fMNdIQ93lVAgExihpAsWfh8Fxe2kkP22D0okfvAOY4Tti_PFvKSrDLslDv2CrzTMBNA3lLAppluZ4eJS2g3t65xaqZlAxonKDR0zczDJcPOTer4YHjC3FcJJ9yrT2PLAf1eEBp3mvyd4B67VMC_T1oam2KbjtNKkWOjS_3MCpUrF5w1IZLAtkI6geyhVtnZJ9n8a0hJ7OPjYPqTdldQaFzofUCxJED_CUypIeXk8EeR1eY1_hvYsscCGfXI3YC6XEDzQ8aDK6TKe14aZyIYxZLVtIL3i07bIfxkZhEUPYOzJ8J9OI98QUyhP2ayFjsOOAciRfXeM3UdhlWhDHh6JWGOHy8QADb3l4yS9Lkzs2E5oCdW=w1253-h835-no?authuser=0",
    width: 3,
    height: 2
  },
  {
    src: "https://lh3.googleusercontent.com/LQVW4yuL9CLZFAbmPSRmQxlWD8sBjNG2369jw-0DG9exT6HwkBGBhyAYA9L87BANItEpd_w7n1ZRsDgyXn37rz6E-a2sqb-_Qk4zYzWilvosBCBMcPA1n-oLxQiTcKRDjl3U-ADpyskkNqKXFAlKQwDpNEcomgNdoB9kP7Up4aCesrUVDhN-iP7-Rk8ChhNDZSoJO-WOIn5h24UMv8HlnTNjdnB67DIMdCrKja7-M5I3aGfDHfVYhTM40mvonW7TtdR5EiRGrZHGfnON0JawKjcMCPF76UhEy3-Rfo7jZoh-zSVVl949Q6-VaLFDjO44rCEG1VGflx1roxD-6QtB4Qmbj6Yx11c6oyCmAGN9iXQyqoMJU5xYITWhkphtkzkyMjLDDGXq8MkiE7oJFtSFXc9Faxz5cJtD-UoTpiPFbGkDupe5ob7erqlD1bMpkzYh1n_1-KoVqrM7-vk3Rfa45BVDNzy_0-ZAnJ3y4gLASnrWAQmfRHV23j2Ny8ALdeCyC4jMFZvcdJr3Sy101f0Tjy9nsELod7o-834IhMvQqhtLiGYm-OK-xgTMwpcWElgi25rawkdmJqlUIwRnhidAKLZBgrhENEyDu0Yva9b6p3XVbTo3r3LCX3D_lfcDnXk-B4tDtf_Jjzm51CRsHlIDU8KP2-g-TD1uHFLGI2eQpJDwSub8giBGMWuVU1vgiMk4rj3LpnInBhc8AdgUckcKuRd1=w1253-h835-no?authuser=0",
    width: 3,
    height: 2
  }
];

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const galerie = () => {
  const styles = useStyles();

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <BackgroundImage path={"/images/flower.jpg"}>
      <Container className={styles.container}>
        <Headline>Galerie</Headline>
        <div>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </Container>
    </BackgroundImage>
  );
};

export default galerie;
