const Logo_1 = () => {
  return (
    <svg
      viewBox="0 0 500 300"
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 sm:h-20 lg:h-24 group"
    >
      <metadata>
        <inkpad:thumbnail
          xlink:href="data:image/jpeg;base64,
/9j/4AAQSkZJRgABAQAAkACQAAD/4QCARXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAACQAAAAAQAAAJAAAAABAAKgAgAEAAAAAQAAAPCgAwAEAAAAAQAAAJAAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAJAA8AMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAEBAQEBAQIBAQIDAgICAwQDAwMDBAUEBAQEBAUGBQUFBQUFBgYGBgYGBgYHBwcHBwcICAgICAkJCQkJCQkJCQn/2wBDAQEBAQICAgQCAgQJBgUGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQn/3QAEAA//2gAMAwEAAhEDEQA/AP7+KKK8O/aI/aR+Cv7KHwxufjL+0Bra+HvDNnPBbzXzwXFwqSXMgiiBS2jlkwzkDO3AzyRQB7jRX5aeHv8Agt3/AMEjvE032ez/AGh/BFpIDgpqOqRaeyn0YXhhK/jXvfh//gpD/wAE8PFiq3hb49fDrUg3T7L4p0mbP/fFyaAPtCivCvDP7UX7M3jTxLp3gzwd8RfDGraxrDSJYWNlq9lPc3TQxNPKsEMcrPKUiR5HCA7UVmPygmvdaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0P7+K/Jb/gspMX/Zs8AaI/MOq/GD4Z2ky9nQ+LNNcqR3GUH5V+tNfkb/AMFl/k/Z++GM/aL40fDJz+HimwoA/U7xD4N8H+Lofs/ivSrPU48Y23cEcwx9JFIrwPxB+xD+xd4sZm8VfCHwVqZbqbvQNOmz9d8Br6gooA/nL/4KVfBX9gb/AIJ+/FT9ln9qLwn4M8C/B5LD4wW9jq/iXT9L07RNmm3fhvX1niubuCKE+RI6x5V22lgvfFff3/D6L/gkp/0cd8PP/B/Zf/Ha+Vv+C5mkaVrusfsZ6XrUCXNtJ+0t4LLxSAMjbbPVWUMp4I3AcHg1+0//AArH4bf9C9pn/gJD/wDE0AfAP/D6L/gkp/0cd8PP/B/Zf/Ha+bfgl/wUh/b7/at8AN+0B+yN8BPCXjr4a32sa7puj6lL48bTLu/g0fV7zTEvEibRLiDy7hLVZUCzsPnI3EDJ/ZD/AIVj8Nv+he0z/wABIf8A4mvxn/4NqrZbb/giR8DCv/La11u4P1n17UZT+r0Aewf8Npf8FPdK58Q/sYaldKv3jovjzw1df98i9l08n8ga2/hT/wAFOfEXiX9pXwR+yr8dfgH8QPhX4i+ISao+jXmtNoV3pcn9j2pu7oNcabq11ICI9oXEJBZ1HAyR+qtfkf8Atc/vf+Csf7HsA6pZfEeb8F0qwT+cgoA/XCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0f7+K/H/AP4Lc6rpXh39kLwt4r125isrHSPip8OL24uJ3WOKGKLxXppeSR2IVUVclmYgAAkmv2Ar8ef+C6egaF4k/YDOneJ7K31HTm8ffD1bm2uo1mhmhk8X6TFJHJG4Kujo5VlYEMpIIIJoA9l1X/gsT/wSh0Z5Ir79pD4bloiVYReJdNlOR1/1c7Z/CvO7z/guz/wR/spjbn9oPwjO47W121x/6JR6/KX/AIJk/wDBej9iL9qHwyPDfxA+E1v4M8T2Hie68NM2j6VaHR0jWx1fVrKZZndXRTYaRLHIoVmFwVIVYn3J6v4S/wCDpb/gmtc/szv8ZrrT9b8Ma8bXUpbPwhqUFra3t3cada2F15cEyTvbbLpNQi+yyOytKElIjBjKkA8e/wCCmH/BTj9hn9r34wfsb/C/9mj4hWfizXrX9orwbqcltbW95GPsUcd9bSzJLPBHFIqS3MKtsdiC68YNf1k1/Ip/wU2/au8bftyfsM/sH/tVfCTSbHwX4p8Z/tGeDm0mx1l31S107UEfV7OKO++zG0klSOeIfaYo2ikGGjDK67q+/vg5+2R/wVL+KV3qMXwnuP2fPjA+i3d7Z3lnoWv69oF6ZNNuDaXRjjurLU0McdwDEZd5i38K7UAfvbX4h/8ABt9F5P8AwRM+Aieulag3/fWrXp/rXoGn/tw/8FJ4Lqey8T/siSSCxlEN/c6H4/8AD1/DanasjF1u/wCz5srG6ybDEHKkEDkZ5P8A4N14Ps//AARX+AEfroVy/wD33qN039aAP2or8kP2mf8AiY/8Fi/2VbCPn7B4P+Jt849Aw8PW6n/yIwr9b6/k8/4LMf8ABRvxD/wTz/4K+/AH4mQeC/8AhL9Ktfh54ot7yAXX2WVodTvLMyG3kKPHFLE+nw/NPthkWQoXjYhwAf1U+JNR1PR/Dt/q2i6fJq15a20s0FjC8cclzKiFkhR5WSNWkYBQzsqgnLEDJr8YfhB/wWb8TfHH4b6V8TPhr+yj8Z9b03Vo2aG70+28Mz2MjxO0UoiuT4gTeqSo6bii5Kn5R0rzb4Ef8HHP7Gf7Qng2TxD4E+HvxZuNVhQs+jWvgvUNRuTtGWxPp4ubMKOTvkuEXHJxXuH/AAb8+IY/Fn/BH/4MeJYYJLaO+s9UmSOXG4I+sXxUnaSPmGCOeh55oA6E/wDBTr45aYPtHif9jz4121t18y0tvDV84HqYoNfMn4KrH2NfTP7LP7dXw7/aq8Ta14C0nwj438D+I/D9tBe3ml+NPDl9oc32e4d445YZZ0NtcKXjdcwzPyD2Ffa9fzW/tOfGv9p/wH/wcCr8KP2SPD3hXXPFvjD4DaXKH8XanfabYW9tp3iTWHlcGwsL6SVyZkAQ+WMZ+YnigD+lKvnb9r74p6z8C/2TPih8bfDihtQ8HeEdb1y1DAEGbT7Ca5jBB4xujFfnJ4w8Yf8ABaDwlNo8fj7x3+zt4JfxFqEWk6XBe2PiO8a81CdXeK0tpJdT07zp3WN2WNIy7BWIXg189ft6+Nv+Cw3w5/Ym+MOl/HjwX8OfiX4T1jwL4ksdQ1LwLd3ug6ho8Mul3Cvfy2GtzXMV3bwrlpI4LwXBA/dxyH5aAOw/ZA/4Is/sKeOf2T/hn45+Muk+IvFPi/XPCukajresXHi/xPHLf6jd2cU11cukOqxxqZZnd9qoAM4xX0V/w4x/4Jl/9CXrn/hZeLP/AJcV9N/8E3/iZ4T+MP7APwY+I3geV5tL1LwboxheRDGx8qzjicFW5GHRh74yOK+1KAP5hv8Ago//AMEwv2S/2dPhh4Bt/wBl+Lxf4H8bfED4keEPB1jq2meN/Fay28OpapE2oP5b6s8bkadDdYLISv3lwwBr+naONYo1iXJCgAZJJ49Sck/U1+SX/BWL93qn7Ll6ekHx68KZ/wC2trqUI/WQV+uFABRRRQAUUUUAFFFFABRRRQAUUUUAf//S/v4r8kP+C5H7v/gnD4hvB1tfFngCcH08rxnojH9Aa/W+vx5/4L361aeGv+CU/wASPEt+srw6bfeFrxlgjaaQiDxNpcmEjQFmb5eABQB/P38HP+CPP/BCL4M/tLfEv9jX4pfGzxFrOu6n4j0/w5oPh69vLjSptE1/V9IS8Sa3vLRY7e8v54VdYZ5UWCMM1mYnlc+ZpfFb/ghH/wAG/XxU8ZeF/iP4D+OVx4cXx/e6pqnh60sNWs7qw1DS9EXytds7FJYWJiWSK5kMqPuSWWUrvVVVfKPDv7FX7IfxM/aL8VftY/tufCr9oPx1428fWmrf25plh8L9dsNOj1HULySSzvrCZVme3l0yzMVtak3BZWjEpYMWWvm+2/4In/s6eH9N02L9nf4X/ta211ZXdyWur3QPDMcf2DU4JbPVIIYb6/02SGe7s3jhW4IcxGJXEZJIoA/S/wD4K0eGvgv8U/2B/wBkLxh/wT1up/BGl/Gb9pTwv4q0K/ukuHNhqviRdUnN6LSWU+SqXcvnm2hZIg27YF3Zr7K+GH/BEX4If8E6NF8OfFj/AIJ8fE2Dwh8ZvDKvDcaj4y1CS90bXdOugjX2jX9osyPb2Mtyhu4WtyZre4JkzJkivwL/AGn/AA/8ZJ9L/ZQ/4Jp/GHwP4wtPgHZfHnwjYaDbeOfCc+h6tHp15dXcB0e61uy1a70++8q1uniie2SKd0TzCwKHP9jmj/8ABFT/AIJIaGoWy/Zy+H7gf8/Gh2lwfzmjc0Afjx+zT+xP/wAFY/2avAPx81bwB+0f8KtbuviRrOpeMdW1Q6JeavqJuL7TII7uaDbqFvb2otJImSyt3huYtiqZG2t5Kfzafst/8Fuv2xf2Pf2Lvhx8II/iMngnRvDujxQ6ZpmiWPhG9uDbzM1xFPfrqGpX+plpllEij+z7MBGUgMpDH+2D9rr/AII7f8Er9P8A2b/HnjPQ/gP4N8P6pofh3VNQstQ0TTY9Iurae2tJZY5Y59ONtMpVlB+Vxnpmv8sTX/2O/HOofDjw74nh1Gw1671TSbDUPKsNN8W3Wo2ttLbpJDbSStph0xisJUDyJpI1GF3rgqAD95G/4O3f+Ci/hbxKlnoHi/R/EtiGA8zVfC1qNwPqba90/p34Ue9ftv8A8E2P2wP2jf27v+CznwP+O37TmkaTpGo3/wAEfEGqaOujwm2guNMuNZFtDdNAdQ1MRySvFMMC6b5VUlUJKj+OL9gDx9pHhHxRc+Dbu68L6Fp4dopofHPjDxR4a3HPz7z4fuLZUH+y8ZPqTX9VP7E37evwt/4fjfD/AOMn7UHj34a+E/DGifs+f8Ito+saR4puL3QZ0tdfkht4RquvLbXE15xKsolaV28tnaRzuIAP7i/ifdR2Hw18Q30v3YdMu3P0WFya/Kn/AIN9NPGmf8EZP2fbYDG7w15v/f66nk/9mr7V+LP7RPwD8WfArxXJ4O8d+HdSa70O/Fs1rqdrOJGe2kCbPLlO/cSMBTz2r+Gv9mv/AIKyfHn9kf8A4Jpfs6af4e/aR8J+HNFvdTs/Btzoln4L+06poFlFbRX19qN9c6jqeLtbS2uoHxbWYFw8qxRHeCKAP9E6v5mfjgPFjf8AB0d4YXwE1omun9mi/wD7Oa/EjWgu/wC3r/yDcLEVkMIk2+YEIYrnaQcV+ev7P/8AwXr+PnxE+JeifDr4eftEeEdfXxbr+oaL4e1D4ifDHVPDemalBp0IkfUYtV0/Wxbpbu+YQJYhPHIV86CMMDXZ6b+1Dqvwj/4OK/AXxt/4KLfEP4XeHLa8+AlzDY69oOqvZ+HZreXXrz7Oi3erSrvuXdJ8qjlSqjbkhqAPiL/gtD/wU6/ae0z9pj4DfBD9oTT9G8BfGD4H/EObWb640OK71zRL2zurC3k0fWNPspWt7i4kcPdRJYyShzPF5bSKJDt/e34a/Bn9tf4Zf8EP/wBoXxv/AMFBvHWr+Mfid8QfA/i/xFfWWpNGItBguNEnS20u3ggVIIDFGge4SFViWd5FQELvbK+Jnij/AIID/Gb/AIKP+FP+ClHxI/aJ+G+q+L/Bnh+LRNL02fxTop02O6trma4ttVZPO3PeW63M0cTOzIgKuqiSNGH1V+35/wAFBf2C/iT/AME7fjtpnw5+N3gHxBdX/wAPPE9taw6b4l0u6knnl0m5SOKNIblmeR2IVVUEsSAASaAOv/4IQf8AKHn9nj/sTbL/ANmr0T4IftS/HnTv27fGP7DH7Tmn6PLcz6NceOPAuvaEk0EN94dS/Wymsr+3uJJWi1HT5Z7dXkjkMVzHKsipEQyVwX/BCmFoP+CPn7O6N38F6e3/AH0pP9a8x/Yv8W2H7VH/AAVG+P37RviS6h0zUvhJCvwi0Lw1LIF1ODT4rhNS1HWbu3PzpBq90IPsDj5ZLa1V+S5AALn/AAXA+Ingv4NfBL4NfGv4kX6aT4d8HfGnwNq+qX0oZktrKG+ZbiZggZiscTMxCqSQOATS+Dv+Ck/7V/7YWkJ4x/4Jv/AZvEXgW8ylh44+IWrt4U0y9Ksymay05LO+1W5tgRgSSW9tuOQoO3ny/wD4OPPg9L+0P+wJ4d/Z/t2Cy+Ovib4J8PRsTgBtT1eK1Bz2/wBZ1r9A/wDgl78aI/2g/wDgnb8F/iywK3eo+EdMh1CNhgxajZQLaX8RB5Biu4ZUIPOV5ANAHzhe/BL/AILTfGWzl074i/Gv4efCSymUo6eA/DF5rOoBXGCE1DXL1IUcA/LINP4PO3PTQ/4I767480H4LfEX9lv4reJ9X8YeI/gn8R/EfhWTWfEN5Jfatf6fPcDWNJubu4mJeRnsNRgUN90BNq4VcD0P9ln4zfETX/8AgoN+1H8BviBrM13Y+Gb3wjq/hnT59oFrpOq6FDFMYAAGMT6lZ3hY5IEhPTNeW+DmP7PP/Babxj4Wuv3WjftG+ArHxFZO/Cv4g8FSjTb+JPV5NMvbCQ99tufTkA/X6iiigAooooAKKKKACiiigD//0/7+K/I//gu18v8AwSg+Ltz/AM+1rpdx/wB+NXspM/8AjtfrhX5If8F4wV/4JA/Hu4H/AC7+GnuP+/M8Mn/stAH630UUUAfzv/8ABfg7/HP7Dlr/AHv2mvAz/wDfD3H+Nf0QV/O5/wAF6f3vxe/YWtP737RvhOT/AL9+af61/RHQB8Tf8FK9asfDv/BOz48azqUdzLBD8PvEu9bRJXmIbTLhfkEP7wEZzuXGwZYkAZH+OF8UPHHhm5+FfhbwRqPifXbERaPZs2nQWWpG2YtCpyRqOsNCVYnIe2t44W6oiqQB/sW/8FQ7k2X/AATP/aJvB1h+GPi5/wDvnRrs189f8Ehv2X/2dPC3/BMX9n/UdH8A+HLW91j4c+F9Q1G4i0q0SW6vLvSbaa4nndYg0sssjszu5LMxJJJJoA/yL/2W/id8Yfhj40XUfhR438Q+FLJZQ0raNqF9pUswH/TSzgvEVvdo3+hr+sb/AIJXeCfi1/wUK/4KcyeI/hX8RPsOs6L8G2t7zWfiJpUfxCnnI1iBJoJDew6FvJ+0FY51gjZIFMH7wM0jf3w+Jf2Lf2OfGknm+MfhN4N1Zj3vNB0+c/nJA1fgB/wTy+H3w/8AA3/ByL+114Q+F2haf4c0Hwl4K8LWFrp+lWsVnZ241Cx0u8cRQQKkab5Fd22qMsSTyTQBX+Jn/BEf4n+CvCmt/EPUh+zvqa6TZXOoTTw/BSz06/It42lZoJ4NYYRT4XMcu1tj4bBxiv4vvih44/Zs+Bf7OnwU0zUf+En8Q/EzXdF8M3WqO/gLwgumW2iX8IjENpqV9pEt/qt0bON7e2d5HiEsbq0jGF4h/qsftdzS2/7J/wAT7iCdrV08Ja2yzIFLRkWExDgMCpK9RkEcciv5Uf8AgnV/wbkfsZftSfsSfAv9qz4qeLfHa+M9a8F6BfedDf6bLFaiOFJ7WO0jvdNufJS3yBDtO5V43EE5AP55dK+M3/BDTw58c/Cvj+38b/Eq28S/EuzTWfEmueIdI8C+L9K0C/1O5LTRXlhP4fZZJAo+0XH2SLcu9U2mRpQn7RfBzw/p2q/8FofhBpvwjutA+LKP+zLq1z4Pm1HwrB4U0m7nbWtcuNMDaNHDBHaQsygGWOKLzI2MyABwT+wvgr/g2d/Yk+Hmm67ovgzx18Q9LsvFEEVrrNvZXuj2kWoQQgrHFdJbaPEs0ahmAVwQMnjk1+QHxctdT/ZD/wCDhKz8DfDv4ifbvE3hr4K3uneHde+KGtiVH1a8t9au7GO/v5VTMCXM8SBFTIjwqg8UAYnw6/bj/wCCsnwJ+KvxO+L/AO2N+yFDO/jLwdaTeA/A1rY2keljU9BmWPUUtTm5uPtE1q1/qMtqBJcyQWyFQ0KiVfUPGWs/t6ftA/8ABJ/4k/F/9pH9hj4aeDtZuPA3ijVbvxZfmw0aew0sWF1NHNYaP9m1LVFvobcZiF1NaZlVWJRTurV/Yk+Df/BYb9pL4q/Dv4uePvGXh+fxt+ytN4j0iy1PxzJLqOkeNdS8T3mqR3up2E+nSxXH2G20iTTorKXywN3mRBVVXUfov/wUR/Zd/biuP+Cffx8+OP7Yn7QFzqj6T8NvFstv4N8CaZD4f8Mh5tFu4Sl49w19qeooN+VWW6iTcAfL45APsb/glr8Svh7+zp/wRJ+BPxW+LOojR/Dmh/DfQr+/vGjllEMUtpE28xwo8jcyDhVJ5r83/iD8VP8Agm7+3n/wWs/ZY+Nf7MPjzTPE3im00vxXb63ceGtWnstQ8vSIrTUNLh1KG3khna3Ev2pDBcIYp45JY5FdVwv7Tf8ABKXThpP/AAS8/Zw07GDF8L/CIb/e/sa0Lfrmvzr/AOCuv/BNb46/tq/tv/sofFX4KadY2Oi/D/Xr+88XeIjNFb3+m2sd7ouo20lqQ6zyzzDTbi0jKLIIxcMXCoxYAH09/wAFef3/AIT/AGfdMHW6+Pfw7wP+uGqi5P6Qk1n/APBM4/8ACj/j3+0l+wndfurfwZ41bxr4ci+6g0Dx0jaqscKH/lnb6qupQnHAwB6E6H/BVf8A03xh+yf4eXk3/wAefDzbfay0rWb4n6A24rL/AGxlH7N3/BSP9nv9sO1/caR4+a7+DfiqQchhqu7UvDcjDoPK1O3ltlY9PtxA+9ggHu37Zf7C83x28WaT+0r8BPGF18LPjZ4QsZbHR/FVoiz21zYu/nPpWt2Mn7u/0x5Rv8tiskMhMsEkb7t35R/Ej9sDUv2jf2Uv2dP+Coms6XbaHr/wZ+LtvoHiybTZvteltZajezeDNen0y7BK3WmTSXcV1BKGb5YlBYsjGvL/APgvh/wT5/aO+J3wu+JX7UXxB/aC8azeAbR9DsNH+H3he1ksNM0mwv8AULHT9Vv9TFnJPPq4t7ae6vDuhQoBtOYVZD6hrf7RHg7/AIKd/si/F39gv9gH4USRfB/wz4Q1Pwu3ibULmHQZLDVrfS2udFh03w2YW1B0NwLVxJdJYKFJeMSFcEA/pqor5a/Yd+PUX7Un7Gvwr/aMSRZJPG3hTSdYn2/w3F1aRyXEZxxmOYujDsQa+paACiiigAooooAKKKKAP//U/v4r8qf+C5Fp9t/4JB/tFQ4zjwPqkn/fuLf/AEr9Vq/MD/gtaAf+CR/7RoP/AET/AFz/ANJHoA/Sfw7dfb/D9jfZz51vE/8A30gNbFed/DvXdGk8C6JELyAyCwtgV8xcg+UuQRnrXoSsrqGQgg9xQB/O/wD8F1B5/wC0L+wjaevx/wBBk/79pIa/oir+aX/g4PX4n3Hxm/Ynsvgo2lL4vf4y2j6QdcE7acLtLZzE10tsRM0KsQXEZDEcAgnI+6l+IX/BcrTR/Z158LPgxqk3T7bbeMddtYT7mCXQJJF/3Q7Y9T1oA9v/AOCskwg/4JZftKSHt8LPGIH1Oi3YFdR/wTRsv7N/4Jx/s/6djH2f4b+FI8f7mj2o/pX5C/8ABTLw5/wWC8Xf8E7PjxrXx68WfC3wH4SsPh94luNQ0rwjp+q65qGowLpdzvs/7S1R7GG2SUfKZUsXkH8JB5H7UfsI2f8AZ37D/wAGtPxjyPA3h2PH+7pluP6UAfVdfwea7+3F+0L+yZ/wX/8A2zdQ/Zq8Lab438Q68vhGCXSLrTfE+pXbWlho9ukk9uvhvS9TaOOJ3jWZ7lUGXjEe47tv94dfzv8A/BKnTU/4fBf8FD9eZRvl8R+B7cNjnEOjXJxn/gYoA/NX9pb/AIL8ftLX/wCzr4/+Gvxc+H3grwzfa34b1XTjDqN9400G7VrqzlhHkR634QtYJpst+7i+0LvbCl1zkf0Gf8EV7/xxf/8ABJv9nh/Huh2+gXMXw/8AD8VtBb3n25Z7GPT4FtLt38mHy5LqAJO8GG8lnMfmSbdx9K/4Kpakukf8Ew/2jdTY7fI+GHi5wf8AaGjXeB+JwKP+CVkXkf8ABMD9m+A/wfC7wev5aLaCgD70r+Puz+A3wk/au/4OrfiboHxj8MaT4u0XwZ4AZ57DWrKC/tWf+zvDYhDQ3CSRll/tR2XI45Ir+wSv5P8A/gmpq48b/wDByl+2h4mf5m0nTLXTwx/u+Toltj89Px/wGgD51/a70j9ivwt8UPiT4M8A/wDBPz4bTaR8NfHnhjwTq/iC+l03TmV/Et1pqW11Ho9laRzPDcQ6gpt3WcDILOBsaM/aX/BWT/gjh/wS2+B3/BND45/F34X/AAT8OaD4h8P+DNWvNNvbSKWN7a6S3bypUAk27lfBGQRntWz+0/8A8EvP+CkHjv4k/GYeDfFHgPxV4U+PPjXwrreoXuoRahpOueHdO8L6hYz6dDaLCbuzvRaW9ptO4W8k0rtKX5Ea/c//AAXx1X+x/wDgjh+0Ldk43+E7iD/v/JHF/wCz0AfWn7CcWn+B/wDgn/8ABuDWJo7O10f4feHlnlmYRxxR2+lW4dnZiAqqFJJJwAMmvxW8Pf8ABe3Xf2n/ANsr4faD+xX4bj1T9nhPH1r8PvFPjjU4ZIm1XWdXsb2Wxg0SMshFvbyW6PczSrvbzYVWNEcPJ9z/ALXn7RXxG/Y//wCCf3wms/hVZ6ImoeLb3wl4EbVvFEU0+g6HDq8K2zahqkMDxPJbqVWBUMsSNNNEHdU3V/Jh/wAFdv2wv27v2Kvi/wDBz/gnV4S8M/DbwprvgXxBo/jbwjpfw10by9M8S6rPfSw6c0mlyMH0p0mEizWwlf7Q83mJKyhRQB/XN/wUG/4nf7bv7FngduRP8Rtc1Uj/ALBng/W3B/AyD8696/4Kefs7eIf2pP2EviL8KfAZaPxamnDWfDE0Y/eQ6/osqanpLoeqn7bbRKSOdpI5BIPzj+1S2r6j/wAFO/2LNN8QrEt/BB4/1O5SAkxLNDoNvaybC3JUNeEKTzg81+wdAHzj+yB+0R4e/a2/ZZ+Hv7TXhcLHaeOdAsNY8lTnyJbmFXmt2/2oJS8TDsykV/LN/wAEi/2z9A+IX/BaT4nfGKGw8O6Pov7Wuhrq2i2dv4ktm1PTJfBMsulmz1TSPvjVr6Ai+eFSDBGZAPMK3BT3LxVrH7dX7Ov7Mf7UP7BH/BPaG6Xx98NfiLbat4c/s62tby9s/BHjyf8AtjzNNtb2WKGaa0uJNRtkV3GFhO0hlDD8NPjx/wAEuf23LzW/DP7UH/BVq9i+F3hr4l63qOofEPx14X0K31fxRo+2zhtrKHUbjTVkTRtMu4PNgb7GZ4Ucs+oyTGZViAP7Bv8AgjMV8BfAT4h/smSHa3wR+JnivwpbI3D/ANlz3p1rSWI7L/Z+pQKmOMJgE4Nfr1X89/8AwTq8K/Ab9kn9ve5+Av7MmsQ638KPjB8I/DPiPwhqkV4l9DeXHgoDw9emO6jJSeWTT5tMkdl67GwqhSK/oQoAKKKKACiiigAooooA/9X+/ivy1/4Ldafaan/wSJ/aMtr1N6L4D1iUDJHzxW7SIeCOjKDjocYORX6lV+Xf/BbO4gtf+CRv7RklwwRT4B1pAT/ee1dVH4kgUAfnZ+0h+x9/wb5fsReCPhXL+0z8DvCVlP8AEvUdP8PaW0Ghm5Z7u5RN01w8Y/dwRl1MsrHI3DAY1rfC7/gnr/wRG+K37bfxX/Yi0z9mbw/puu/CnTNB1W6v2RI4L6LXopZU+zRxTibEHlhZGZANzAcAqX/GD/gpP4U/4J2f8FHfiZoPx+8G/th6z4Ll03R9HW38Pf8ACHeIta0n+0dOilja4UwpB5YnhlWGQRAkFWclyQq/M/xa8PfD2/8A+Ch3wo/al+Dv7SfiCfxNFp0+r/EL4lal4F8U3819rsLWyWtpb6Fa6bbwnT4Y4Y2sbUsYIfKYzNIxUSAH7J/8FCf+Cdf7E37GP7cv7D/if9lz4c6V4M1LWvi9bW17c2IkMk0EVu0ixlpHchQ/zYGMnGelf1y1/Dz+2n8ZP2b/ANuX4q/sWfsoeN/GniX49A/FR/8AhJNT8X+DL/wvBfWt5BJi32PpOlWbBB8qxwh5Ag3MT1H9Cy/8EMv+CaVnx4b8Ia9oCfwxaL4z8V6ZCo9FhtNWiiUewTFAG/8A8Fw9bHh//gkL+0Xfk7fM8Darbf8AgTCYMfj5mK+4P2YtHfw9+zX8PfD8g2tY+GdJtyPQxWcSf0r+Zz/guf8A8Euv2I/2Yf8AglB8Zvjv4D0fxBN4k0XSrWLT7rWfFviTWUt3v7+2sXKW+p6lc2+5o52XJiJGeDnGP6pfh9EIPAWiQAYCafbLj0xEooA6+vwC/wCCUirN/wAFOP2/9QH8fjnwzFn/AK5aLjH4Zr9/a/hl8In/AIKV+Jf+CnH7Ymjf8E7X8T29wPiBFJrFzpd34XsNLAi0+3it1up9f03U5mn4k8uO2iA27zIfu4AP6TP+C3+uHw9/wSI/aLvlODJ4F1a1/wDAqA2+Px8zFe4/8EzIBbf8E3v2fbYdI/hr4UX8tHtRX8ff/BU/R/8Ag4E8NfsA/Em4/av1jVrj4fSWNvb6wG1HwPdxGGe8ghRZBYaBp16QZHQfuHDZPJ25r+xL/gnBYXWl/wDBPD4C6ZeuZJrb4deFopGIALMmk2qsSBgDJHQUAfZ9fxGf8E/v2If2WP25/wDgtB+2PfftReDbPxjaaTqVy1il28yCCVPEut2DsphkjOStkq8k8Cv7c6/k4/4IRf6X/wAFRP2x9Wb70+rai5P+94/8a/8AxIoA+Z/C3wd/4JtfG7/goZ8Lv2b/AIT/ALLd54U+Hmp+L/HngzxB4i165nit9T1TwnZXZS30eSy1maVWW4s5XkNxDFuiAC85A+rf+C13/BMH9hP9kf8A4JOfHb4y/AHwL/wj3iK38Pw2cd0up6ncARXeo2kUi+Tc3csJ3K2MlCR2INfHnwE/as+E3ifXvgz8DdNbUNN+Lel/ta+I/EkenXtjPbtqei6zq/iOzvr7TZmXy7u0ghuWS6ZGzDLCwkUKFZv2u/4OTWKf8ERvj0R/0DdMH56zYigD9Efjv8ErH48/sPeKPgHd6PYa8PEng640uHT9TyLSaeWyKW6zMvzIom2HeuHQgOpDAEfx5/s1/sfxfsb/APBwJ+yr8FviZEni7xpr3wri1X4ha74jiGvTz+LorPW7iOWw1S+WSW3lgNksVv8AZzF/olsikMdxH9UH/BQD9l746/tXfsXweCv2W/iDqHwy+JmhtYa94X1uyuZbeEajZRkJbXwiDedZ3MckkUsbpIgLLIY5PLCH+Zz9mn9j7/gph+1x/wAFXvAV5/wVZ+O2r+DfHHwUnsvGvhHwdb2Wny2Wv6LbXGy6lt9Q0mWzsDc+YfsupD7CZxbzRj/VyARgH9C37So+2/8ABY/9le07WXgv4nXX4sfDkIP4Bj+dfrfX5IfHP/S/+C1P7PNvHy1p8NPiJO49FkvfDcYP4niv1voA/ID9oP8A4x6/4K6/BH48p+50b40eHdX+FusyN8sQ1LTg3iHQHYjrI6xapAmf+egAz287/b8/Zb/4I2fDXxqv7Q3/AAUbgmmHjPUhCk/ifVvEeoaBHcKigK1l9pm0qxhwBgyRRRZyAe1ez/8ABaXwpr0/7BGv/HLwTbtceJfgnqelfE7SAv3vN8K3keoXSgd/OsEuoSO4kIORwfzY/wCDlHxx8APEf7Evwl+JXivWtf1C31rxRaS+GtD0O207UbPXJb3T55o5NRsNStb6Ga2t7cNKkgs7poZGQiB2ZSoB9bf8FCfBnwp/Zj+BnwN/by/Ze0rS9P8AB/7OuvW2qtbeG4YVsD4F8QRf2dr32OK1AhaJLa4j1EFPlb7KHGTg1+4djfWWp2UOpabMlxb3CLLFLGwdHRxlWVhkFSDkEcEV/OV/wbqD4p/Ez/gl3efsvftJ/DS/0XwP4buNU8NaFc679oz4j8O6hJPNhobuy0+cxwRXP2MzG2ijnC7kRMMi/bX/AAR+8U+JvDvwC8TfsY/ES+lv/En7Onii+8ANcXJzcXWjWyx3fh67cdf32j3Nou7+J43OTzQB+stFFFABRRRQAUUUUAf/1v7+K/MH/gtZ/wAokP2jf+yf65/6SPX6fV+YP/Baz/lEh+0b/wBk/wBc/wDSR6AP0N+Hf/JP9C/7B9r/AOilrsa/MT4df8Faf+CX8ek2fgbUf2gvh9p2saTDHY3dnqHiHT7KWK5t1EUsTLczRncjqVIGeRX1n4Q/a8/ZO+IG3/hAvih4S1vf937Brdhc5z6eVM2aAPyW/wCCvlj/AGl+29+wfa9SPixcS4/646VNJ/7LX741+Ev/AAU3uLHXf+CiX7BdtZTJPFL498RXKNGwZWEHh64bIIJBAr92qAPwD/4Oevteo/8ABGD4m+DNPz9o8San4W0uLHUtL4i05gB9dmK/fa2t4bO2jtLddscShFHoFGAPyr8Of+C+n2HW/wBmf4UfDS+lRIvF3xp+H2kzK7AZil1mORic9h5WTX7kxyRzRrLEwZGAKsDkEHoQaAH1/Ox/wRduPtX7en7fk2c/8XVgT/vi2mT/ANlr+iev5qP+CM/irwr4Q/a9/b28beMdWstK0y5+M93YxXN5cRwRtNZJIZkDSMoJjE0YbnjNAH0B/wAHL+oSaX/wRB+Ol7EcMttoYH1bX9NX+tfrV+zR4b/4Q39nH4f+ENu3+yvDelWe308izijx/wCO1+Af/BzP+09+zv4p/wCCLPxk8CeC/Hvh3V9b1RvD0NvYWWqWlxcybPEOmyybIY5GdtsaMzYXgAk8Cv6I/h18RvhX450O1f4YeItL1+yWBPJl028guo2jCjaytC7gqRggg4oA9Gr+Gr/gmH8FNZ+Pf/BUf9pfwL4P+Nviv4Ra7Bda/qNvB4Tl0pZ9Thh+IXiyKWS4i1OwvhLDaPNEP3Yjw1wN7HKgf3K1/BR/wS0/4SDwp/wcl6jqslrPFpnimw+K+mx3RjYQSy23j3XbqSJZMbWdBFGzKDlQykjBFAH078Zv2q/+Cq/w5/aN0v4Y/s6/GPxH448D2nxV0X4S6j478V+F/Bz2NjrOpzW8N7FBBZfYNSujZi5VGcQpFJKksZlTZuPqH/Bef9n3/gpV4U/4JKfGPxL8d/2j9C8ZeFbKx05r3RNN8Aw6NNeq2q2aopvm1i9MQWQrISkOW27cgE4sftseBviv+yR8Ofjz8Bdd8L+I7tNf+Ix+OHwc8ZaBoeo6/Z/8JP8A2hb62dA1SHSoLmezmbUoZYYZZo/IltrnIkRoitfa3/BfjxlrPxG/4N7/AIqfELxHod34Y1DXvDPh7UbrRtQAF3p011qemyyWlwBwJoGYxyAcblNAH0r+3lcWH7Jv/BHHxKllp/i/xzpXgnwfp1vd/wBm+IrjTfEs2n2xt47u+/tpVkmWeC3El1M5XEio6EBGIH82n/BOrQv+CYPwZ/4LM+A/H+gaRrP7O9/H4Lm1Kxs/H2utqMvjPXfFkz2MUum6m17f6feWS26M8Vzb3Ie8nnVVU+Uyj+5HRNL0vXfh/aaLrVtFeWV5p8cE8E6LJFLFJEFdHRgVZWUkMpBBBweKxrD4M/B/StH0Dw7pnhTR7bT/AApFDBoltFY26Q6bFbhVhjs4wgW3SNUUIsQUKFAGMCgD82dXP/CQf8F3NCgb5k8LfAnU5sf3H1vxLZIrfUrpjj86/XCvyQ+DX/FS/wDBbP4763Ny3hn4WeANIjPot7qXiO9Yfiyg1+t9AHOeMfCeg+PfCOq+BvFVut3petWc9heQN92S3uY2ilQ+zIxB+tfgH+wT+zRfftW/8E/vgrpWqeMtV8E/F79lvW9c8F2HiHTUtrie0u/Ds134buILm1vIpre5t73T4omkjZQ3zIyOrDJ/ofr8Sv2a/in8Nv2LP25P2rPgj8bde07wd4a1i/0z4w6Pf6xdRWVodP1uzg0rWJDcTMkaLBq1gfM3MMG6jPV+QD9nvD9jqWl6DY6ZrV82p3lvbxRT3jokTXEqKFeVkjCohkYFiqAKCcAAV+St9j9m3/gtRZXo/wBH0D9pnwI9o+OQ/ijwLIZoif7rT6NfSj1ZbLvt4juP+Cs6fHWd9A/4JqfCrxH8eZyxjHiNUPh7wXEynDFtf1NFFyE4JGn292WHQ5xVHw9/wT//AGrf2kfjX4C/aQ/4KNfEqxlufhrrCeIfDPgj4fW0un6Jp+pRqY1mu9Uuy2pak3lM0bri1gdXdGhMbuhAP2TooooAKKCccmuO1X4ifD/QWK65run2ZHUT3UUeP++mFAHY0V5Vb/Hb4IXdytna+MtDlmY4CJqNszE+gAkzXqisGAZTkHkEUAf/1/7i/wBoX4MXPx/+F938L7fxj4j8CrfSwPLqnhS8Sw1QRQyLI8MV00UrQrMF2SPEElCk7JEPNfml46/4IO/sG/FHwfqnhD4nXnxF8SDV7WW1uLnVPiD4qu5GEqlWZo5tSe2kPOdssLxk/eQjIP7NUUAfizrn/Bv5/wAEz9ftha3ui+MNoUKM+O/FkmABjpLqrj9MV8x+L/8Ag1Q/4JE+Mrv7dqGieKlmGcO/iK9uiM+161wPzBr+kKigD+VfWf8Ag0E/4JmXOrWOueD/ABf8SPCd1p0hlt5NF1TSrd0cgDcHbSHfcAMA7sjJqW5/4NN/2Qbslbz4y/E+7jP8N3P4fufz83RGB/Kv6o6KAP5EviN/wZ7fsZ+J/Ck1l4O+J/ifTNbikS4sry80fwvdQJcRnKm5gttIspbmE874Tcoj/wAWRxX1z8Mf+CGX7VHgj4f6L8J739t34m6d4Z0G1jsrPTvCFlpXhmG3gjGFjgFtHN5SKOABnFf0aUUAfzx3n/BvNoeqaumv6t+2L+07cX0R3JOfH0e9D22MdOJX8MV8j+LP+DN3/gmx4/8AF2qePvHnxL+Leta3rd3Pf6hfXus6PNcXV1cyNLNPNK2ilnkkkZndmJLMSTya/rUooA/kN8S/8GY3/BNa98KTaD4R8dfEDTruRoyt1cz6LdFVV1ZxhdJhkyygqCJRgnJDDKn3C7/4NKf+CZN7MtxPrPjBJFOVa3Hhy2YEdwbfQoyD7iv6gqKAP5zfCv8AwbPfsl+AirfD/wCM3xs8PMn3TpXjH7Dt+gt7ONR+Ar5z8M/8GxPjzwR4x0rxV4L/AGxvilpb6LdaxqNlLDMxvYL/AF24lk1G5iuXuWCPdxNEt0RHvnlV5pHPmBE/q+ooA/Avw7/wQr8Vxwh/HX7aX7SerXHf7L43/s+E/wDAIrRnH/fyuA+P/wDwbc/Af49fCTxD8OPEXx4+NOp3Wt2jQpceI/GF5rdos4IeKW5sJvLiuljkVX8tmXJAwynBH9GdFAH4U6H/AMEEPgx4e0K28M6V8f8A4/W+nWkSxR2kPxD1KK3UKMfLEgCqD1wuAOwArA1//g3H/YU8ZRGPx74v+KniFm+8+peN9VnZvrukx+lfvrRQB/P38Lv+Dav/AIJ1/A/xlJ8RPgvq/wAR/COvyxmF9S0Xxnqun3jRkEFWuLaWOUqQSMFsYPSvpX/hzx8Jz9/40/HZh7/FDxN/8mV+t9FAH5I/8Ob/AIGScXvxW+NlyP8Apr8TvFJ/lfivGviR/wAG7/8AwT8+MHiXRvFPxT1P4jeI7jRvMRP7U8c6/emWGQq5gaS5u5Jo4xPHDcAQSREywxliyrtP7p0UAfkZD/wRA/YIESwX0fj27RAFCzfETxngAcAYXWV4+lSf8ONP+Ca7c3HhXxLcf9d/HXjGb/0ZrTV+t9FAH5H/APDiz/gl6f8AXfD7UJf+uvijxLJ/6Hqho/4cU/8ABLA/e+GEjf72v68f56ia/XCigD8kP+HEH/BJCQ51L4I6NqP/AGEJ769z9ftNzJmux0n/AIIp/wDBJDRgFs/2cvh++P8AnvodpP8A+jo3r9PqKAPzju/+CPf/AASivbN7Gb9m34aKjqVJj8L6XG+D6Olurg+4Oa+5/ht8OvBXwh+HuhfCj4b6emleHvDVhbaXpllEWZLe0tIlhgiUuWYhI1VQWYk45JNdrRQB/9k="
        />
      </metadata>
      <metadata>
        <inkpad:setting key="RulersVisible" value="0" />
        <inkpad:setting key="SnapToEdges" value="0" />
        <inkpad:setting key="Units" value="Pixels" />
        <inkpad:setting key="DynamicGuides" value="0" />
        <inkpad:setting key="SnapToPoints" value="0" />
        <inkpad:setting key="SnapToGrid" value="0" />
        <inkpad:setting key="ShowGrid" value="1" />
        <inkpad:setting key="GridSpacing" value="30" />
      </metadata>
      <defs />
      <g id="Layer 1" inkpad:layerName="Layer 1">
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M13.0786+271.653C18.1613+266.571+77.8485+271.653+88.8199+271.653C166.043+271.653+243.964+270.211+321.093+270.211C358.405+270.211+394.956+268.768+432.18+268.768C441.418+268.768+487.245+265.64+484.117+268.768"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M30.4571+33.8312C28.634+35.6543+32.2373+172.668+32.2373+188.709C32.2373+212.148+32.2373+235.587+32.2373+259.027C32.2373+262.884+32.2373+270.598+32.2373+270.598"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M77.6324+32.9411C77.6324+32.9411+78.5225+37.0738+78.5225+39.1718C78.5225+57.8639+78.5225+76.556+78.5225+95.2481C78.5225+137.266+77.6324+179.791+77.6324+221.642C77.6324+235.587+77.6324+249.532+77.6324+263.477C77.6324+266.164+76.7423+271.488+76.7423+271.488"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M29.567+31.1609C29.567+31.1609+61.5859+33.8312+77.6324+33.8312"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M35.7977+265.257L80.3027+268.818"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M79.846+50.7665C79.846+50.7665+78.9559+54.3023+78.9559+56.1071C78.9559+73.8042+79.846+91.6708+79.846+109.513C79.846+148.447+78.9559+187.438+78.9559+226.116C78.9559+240.829+78.0658+255.724+78.0658+270.621C78.0658+272.105+78.8978+269.303+78.8978+269.303"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M78.5225+48.9629L117.687+48.9629"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M118.577+50.7431C118.577+98.7378+115.907+149.061+115.907+197.61C115.907+217.974+113.236+239.144+113.236+259.027C113.236+263.18+113.236+271.488+113.236+271.488"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M80.7361+270.621C80.7361+273.46+79.2879+268.841+84.2965+268.841C94.5188+268.841+104.259+267.951+114.56+267.951C115.747+267.951+118.12+267.951+118.12+267.951"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M120.068+42.6516C120.068+42.6516+118.19+58.7417+118.19+62.3144C118.19+78.8806+118.19+95.371+118.19+112.16C118.19+151.674+115.52+190.264+115.52+229.653C115.52+243.369+112.85+256.784+112.85+270.598C112.85+273.268+112.7+270.17+112.7+270.17"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M123.004+42.7322L160.804+45.2519"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M160.371+46.1186C160.371+93.0838+155.071+146.546+155.071+194.939C155.071+217.539+154.181+241.782+154.181+263.477C154.181+265.575+153.291+269.708+153.291+269.708"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M115.907+273.268C118.535+273.268+136.25+269.708+144.39+269.708C146.195+269.708+151.535+270.598+149.731+270.598C141.958+270.598+135.099+271.203+125.698+272.378C125.637+272.386+110.586+273.268+115.907+273.268Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M160.412+90.7976C160.412+90.7976+159.522+104.439+159.522+111.27C159.522+145.828+155.961+181.17+155.961+216.302C155.961+230.543+155.961+244.785+155.961+259.027C155.961+262.636+154.181+269.708+154.181+269.708"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M168.423+269.263C163.397+269.716+149.723+272.386+153.291+268.818C155.256+266.852+210.009+265.513+168.423+269.263Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M185.335+94.358C185.335+94.358+184.444+96.0901+184.444+97.0283C184.444+113.644+184.444+130.259+184.444+146.874C184.444+179.996+180.884+214.263+180.884+248.345C180.884+256.362+179.994+272.378+179.994+272.378"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M183.578+95.6815C183.578+95.6815+183.759+95.9559+183.339+95.9559C179.28+95.9559+179.872+98.1227+171.205+95.9559C163.173+93.9478+158.655+91.231+158.655+93.9013C158.655+102.23+183.578+95.6815+183.578+95.6815Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M185.335+81.0065C185.335+81.0065+185.335+86.3471+185.335+89.0174C185.335+100.112+184.444+111.13+184.444+121.951C184.444+155.067+183.554+188.498+183.554+221.642C183.554+235.772+181.774+249.455+181.774+263.477C181.774+266.444+181.774+272.378+181.774+272.378"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M183.578+77.4227C181.503+79.4979+202.122+78.1878+204.574+78.1878C215.256+78.1878+224.509+80.3547+224.509+80.3547"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M224.499+83.6768C224.499+83.6768+224.499+117.501+224.499+134.413C224.499+167.578+220.048+199.944+220.048+233.214C220.048+244.785+220.048+256.356+220.048+267.928C220.048+269.732+219.158+273.268+219.158+273.268"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M734.526+121.951C731.856+122.248+729.186+122.545+726.515+122.841"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M183.554+267.037L222.719+270.598"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M224.569+93.4445C220.962+93.4445+255.625+88.0064+261.063+93.4445C261.727+94.108+263.733+94.3346+263.733+94.3346"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M268.114+96.1382C268.114+96.1382+268.114+110.38+268.114+117.501C268.114+151.574+265.444+185.689+265.444+220.752C265.444+234.618+265.444+250.367+265.444+261.697C265.444+265.554+265.444+273.268+265.444+273.268"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M880.503+157.555C865.647+98.1341+867.151+186.486+867.151+194.049"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M226.243+95.9559C226.243+95.9559+226.232+129.339+226.232+131.215C226.232+141.748+227.595+163.386+226.243+173.529C222.682+200.232+224.148+275.408+224.452+262.95C225.342+226.456+227.122+270.961+227.122+270.961"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M223.609+273.268C223.609+273.268+227.742+272.378+229.84+272.378C238.884+272.378+249.853+269.708+259.213+269.708C260.73+269.708+272.333+269.708+267.224+269.708"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M268.161+69.8919C268.161+69.8919+266.38+75.1674+266.38+77.9028C266.38+92.6884+266.38+108.418+266.38+123.298C266.38+159.414+264.6+196.183+264.6+232.78C264.6+244.945+264.6+257.11+264.6+269.274C264.6+272.241+265.246+264.969+265.246+264.969"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M269.146+69.0871C269.146+69.0871+294.411+69.0871+305.983+69.0871C307.763+69.0871+315.517+69.9538+315.517+69.9538"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M314.217+71.6873C314.217+71.6873+312.232+81.238+312.232+83.6301C312.232+96.2936+313.122+111.251+313.122+124.575C313.122+158.754+309.562+188.57+309.562+223.376C309.562+239.95+306.892+252.983+306.892+267.881C306.892+271.144+310.452+268.771+310.452+268.771"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M267.657+270.141C267.657+268.597+269.623+270.141+272.998+270.141C286.615+270.141+295.835+268.436+307.716+268.436C309.154+268.436+307.922+269.51+306.416+268.003"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M361.141+271.031C361.141+271.031+356.687+263.001+355.8+258.57C349.216+225.647+337.009+187.954+326.427+156.208C324.377+150.058+325.917+156.194+319.85+135.826C313.783+115.457+316.636+114.335+316.636+114.374"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M318.85+114.83C313.619+114.83+322.112+112.458+323.3+111.27C325.02+109.55+350.003+106.711+350.003+105.039C350.003+103.969+352.673+103.259+352.673+103.259"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M352.353+103.323C352.353+103.323+356.248+120.504+357.987+125.858C368.821+159.228+370.712+192.695+384.74+220.752C388.274+227.82+396.312+259.117+396.312+252.796"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M363.331+267.084C363.331+267.084+380.522+260.636+393.523+255.002C394.989+254.367+393.523+254.135+393.523+254.135"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M30.3606+84.255C30.3606+84.255+34.6185+82.5215+36.8611+82.5215C47.1909+82.5215+56.8803+81.6548+67.1968+81.6548C70.0515+81.6548+77.8919+80.4938+76.2976+82.0881"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M31.2273+130.625C31.2273+130.625+33.7709+129.131+35.1276+129.325C44.6603+130.687+55.5622+128.458+65.4634+128.458C68.5504+128.458+70.7369+129.325+73.6974+129.325C74.2255+129.325+78.1159+129.325+77.1643+129.325"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M31.6607+202.131C31.6607+202.131+34.2292+201.264+35.561+201.264C48.045+201.264+60.7435+201.698+73.264+201.698C74.2854+201.698+76.2976+201.264+76.2976+201.264"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M32.094+231.6C32.094+231.6+32.9608+230.325+32.9608+230.733C32.9608+232.218+37.2195+231.167+37.7278+231.167C48.7766+231.167+59.6779+230.733+70.6638+230.733C72.4033+230.733+75.8642+230.3+75.8642+230.3"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M35.1276+105.057C35.1276+105.057+36.6126+87.849+35.561+92.0556C35.3076+93.0689+34.8866+104.19+35.1276+104.19C36.4015+104.19+36.3132+101.41+36.4277+100.723C36.6508+99.3843+37.3147+98.062+37.7278+96.8226C40.1669+89.5054+37.9235+99.3388+38.5945+102.023C39.1047+104.064+40.6738+93.8812+40.328+95.9559C39.7561+99.3875+37.0013+108.817+39.4613+106.357C40.9894+104.829+43.6004+102.636+44.2283+101.59C45.2715+99.8511+44.6617+93.495+44.6617+95.5225C44.6617+95.7046+44.6129+102.456+46.8285+102.456C47.8702+102.456+49.0993+105.178+49.4287+104.19C50.4952+100.991+51.1622+94.2224+51.1622+94.2224C51.1622+94.2224+52.4424+96.6358+52.8957+95.9559C54.6712+93.2927+56.1454+97.9066+53.7624+100.29C52.5282+101.524+55.9293+106.802+55.9293+105.057C55.9293+104.768+55.8379+104.464+55.9293+104.19C56.9994+100.98+58.3834+100.728+59.8296+96.3893C60.4836+94.4271+58.5295+104.525+58.5295+102.456C58.5295+91.9438+59.7961+114.825+61.9964+99.4228C62.361+96.8708+60.95+104.792+61.9964+105.49C66.664+108.602+64.5807+96.4371+65.03+95.0892C65.4634+93.7891+70.1561+93.1762+68.9303+93.7891C65.8154+95.3465+72.5708+105.967+70.2304+102.456"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M35.1276+124.558C37.1651+122.521+37.7306+121.072+38.1612+118.058C39.5841+108.097+38.8823+115.889+41.1948+119.358C41.8408+120.327+40.4635+122.825+41.6281+122.825C44.2549+122.825+43.7672+113.71+44.6617+114.157C45.6482+114.651+52.4623+128.14+52.4623+115.891C52.4623+115.602+52.7027+114.864+52.4623+115.024C49.9496+116.699+51.3907+123.463+52.8957+121.958C54.0069+120.847+55.0778+117.114+55.0625+117.191C54.5986+119.511+53.9596+120.106+55.9293+121.091C56.2947+121.274+56.4306+122.141+56.796+121.958C59.7942+120.459+57.9196+116.934+59.8296+115.024C61.5071+113.347+60.4356+119.794+60.2629+120.658C59.9397+122.274+61.9964+118.037+61.9964+116.758C61.9964+114.572+60.6771+123.258+62.8632+123.258C66.6107+123.258+68.0636+109.543+68.0636+113.291C68.0636+117.233+66.6801+124.558+75.4308+124.558"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M41.6281+221.199C41.6281+221.199+41.917+220.91+42.0615+220.766"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M39.8947+219.032C39.8947+219.032+40.3336+224.229+41.6281+223.366C44.6618+221.344+44.2283+221.724+44.2283+217.732C44.2283+217.048+43.675+213.832+44.6617+213.832C45.61+213.832+45.3127+212.207+45.9618+212.532C46.9812+213.042+47.0332+213.122+47.2619+214.265C48.0655+218.283+48.9442+225.074+45.5284+223.366C44.6148+222.909+44.3728+219.61+45.0951+220.333C46.6543+221.892+49.7427+225.772+50.7289+223.799C53.0154+219.226+55.6359+223.559+56.3626+215.565C56.5071+213.976+58.3916+210.798+56.796+210.798C54.6401+210.798+57.2967+215.511+57.6627+215.999C61.3089+220.86+57.089+223.519+58.9628+227.266C59.2671+227.875+60.1709+226.335+60.2629+225.966C60.8503+223.617+63.0171+216.683+62.4298+219.032C60.0401+228.591+63.8185+222.066+70.2304+222.066"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M79.7645+90.7555C79.7645+90.7555+85.2482+91.393+87.9985+91.6222C96.3555+92.3186+105.078+94.2224+113.567+94.2224C114.001+94.2224+114.867+94.2224+114.867+94.2224"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M82.7981+107.657C82.7981+104.297+88.0548+95.3254+87.1318+98.5561C86.9933+99.0406+85.2819+103.573+87.1318+104.19C89.0795+104.839+91.8988+98.2365+91.8988+100.29C91.8988+103.323+97.8829+108.524+99.2661+108.524C102.447+108.524+105.333+97.975+105.333+101.156C105.333+101.642+103.693+111.633+105.767+108.524C108.178+104.906+115.734+110.333+115.734+105.923"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M82.3647+118.924C82.3647+118.924+82.8229+118.058+83.2314+118.058C90.5498+118.058+109.178+116.08+115.734+119.358"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M80.1979+192.164C80.1979+192.164+81.3185+191.093+81.9313+191.297C89.5871+193.849+106.965+192.648+113.134+189.563"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M79.3311+218.166C79.3311+218.166+81.0764+218.023+81.9313+218.166C90.767+219.638+97.7035+219.466+106.2+219.466C107.587+219.466+113.255+218.599+112.267+218.599"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M119.634+108.524C117.704+108.524+125.797+105.923+127.435+105.923C130.844+105.923+154.737+107.46+154.737+108.524"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M117.901+150.994C117.901+150.994+121.053+150.017+122.668+149.694C130.488+148.129+140.995+150.127+149.103+150.127C150.403+150.127+153.004+150.127+153.004+150.127"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M118.334+111.557C118.334+111.557+135.369+110.257+143.903+110.257C146.052+110.257+148.532+110.188+150.403+111.124C151.445+111.645+155.035+111.557+153.87+111.557C146.595+111.557+139.254+114.157+131.769+114.157C128.106+114.157+124.402+115.891+120.934+115.891C120.79+115.891+120.357+115.891+120.501+115.891C127.026+115.891+133.497+115.024+140.003+115.024C144.732+115.024+143.692+115.001+147.803+115.457C149.103+115.602+153.012+115.024+151.704+115.024C144.78+115.024+137.308+116.904+130.469+117.624C127.087+117.98+117.101+119.791+120.501+119.791C126.713+119.791+132.924+119.791+139.136+119.791C142.75+119.791+153.584+119.358+149.97+119.358C145.193+119.358+133.178+122.229+127.002+123.258C123.996+123.759+115.746+121.97+117.901+124.125C121.839+128.062+137.46+124.196+142.169+124.558C152.413+125.346+157.341+125.858+153.004+125.858C146.275+125.858+139.064+127.514+132.635+128.892C129.034+129.664+118.118+131.059+121.801+131.059C128.391+131.059+135.182+130.555+141.736+131.059C144.492+131.271+147.233+131.925+149.97+131.925C151.415+131.925+155.748+131.925+154.304+131.925C145.468+131.925+136.62+134.226+127.868+135.392C124.936+135.783+121.61+135.826+118.768+135.826C118.518+135.826+115.601+136.259+116.601+136.259C129.316+136.259+153.004+137.141+153.004+137.559C153.004+138.507+150.54+138.426+149.97+138.426C127.051+138.426+119.634+140.806+119.634+141.026C119.634+141.919+141.887+141.172+143.903+141.46C146.713+141.861+154.975+143.626+152.137+143.626C143.566+143.626+134.727+144.854+126.135+145.36C122.93+145.548+114.557+146.66+115.301+146.66C127.974+146.66+141.251+147.527+153.87+147.527"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M161.238+133.226C161.238+131.196+167.772+133.602+168.172+133.659C172.464+134.272+181.173+134.092+181.173+134.092"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M157.771+139.726C157.771+139.726+173.367+140.593+181.173+140.593"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M158.637+175.262L186.806+176.562"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M158.637+182.196C158.637+177.196+177.395+181.763+181.173+181.763"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M158.637+222.066C158.637+222.066+175.393+222.499+183.773+222.499"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M158.204+229C158.204+225.167+178.373+227.266+181.606+227.266"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M184.64+124.558C181.832+124.558+194.411+123.391+195.474+123.258C203.219+122.29+211.837+124.992+219.309+124.992C220.031+124.992+221.476+124.992+221.476+124.992"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M183.773+155.761C183.773+153.082+193.578+154.461+195.04+154.461C203.42+154.461+220.176+154.027+220.176+154.027"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M184.64+139.293C184.64+139.293+204.767+136.904+214.542+138.859C216.405+139.232+220.176+139.726+220.176+139.726"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M187.673+130.192C187.673+130.192+187.851+134.526+189.407+134.526C192.791+134.526+199.292+126.725+195.907+126.725C194.982+126.725+192.179+136.52+194.174+134.526C195.622+133.077+199.065+132.853+199.807+130.625C200.198+129.454+197.48+134.777+198.507+134.092C200.804+132.561+205.599+125.896+204.574+128.458C201.503+136.138+204.425+139.558+211.508+131.059C211.587+130.964+201.251+128.166+203.274+133.226C204.134+135.374+207.11+136.298+209.342+134.959C214.013+132.156+207.935+132.032+209.342+130.625C213.676+126.291+210.579+133.659+212.375+133.659C214.542+133.659+218.876+133.659+218.876+133.659"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M188.54+146.66C188.54+146.66+195.973+143.593+194.174+144.493C193.957+144.602+185.949+154.313+192.007+152.294C196.26+150.876+194.318+146.997+195.907+142.76C196.247+141.852+197.207+139.19+197.207+140.159C197.207+142.064+197.781+148.68+197.207+148.393C194.524+147.052+197.641+154.822+197.641+150.127C197.641+148.449+198.232+147.75+199.374+146.227C202.483+142.081+202.015+144.206+201.541+147.527C201.376+148.68+201.453+152.035+201.974+150.994C202.558+149.827+205.132+149.105+206.741+147.093C207.518+146.123+210.087+143.667+208.908+144.06C205.846+145.08+203.098+156.574+208.908+148.827C216.229+139.066+209.992+148.466+211.075+148.827C214.133+149.846+214.975+144.712+214.975+148.393C214.975+152.918+215.104+148.979+218.876+147.093"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M225.81+133.659C225.81+133.659+226.098+133.659+226.243+133.659"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M226.243+132.792C226.243+132.792+247.124+131.935+257.445+133.226C260.025+133.548+267.846+133.226+265.246+133.226"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M225.376+167.462C225.376+165.853+235.914+167.405+236.644+167.462C245.493+168.142+256.521+168.328+264.379+168.328"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M224.509+201.698L260.479+202.131"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M224.509+238.967C224.509+238.967+225.898+238.101+226.676+238.101C234.51+238.101+261.563+243.083+266.979+237.667C267.348+237.299+267.846+236.367+267.846+236.367"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M241.627+121.525C242.965+125.885+241.634+108.09+232.743+108.09C232.454+108.09+231.588+108.09+231.877+108.09C240.384+108.09+238.644+111.8+241.627+121.525Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M244.228+116.758C242.762+116.758+244.011+105.675+244.011+103.757C244.011+102.201+245.744+97.867+245.744+99.4228C245.744+110.815+244.54+116.758+244.228+116.758Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M246.394+116.758C244.932+118.537+243.419+120.278+241.844+121.958C241.132+122.718+243.09+120.278+243.578+119.358C245.611+115.517+244.222+108.598+248.345+107.223C253.641+105.458+259.753+99.2356+251.812+109.824C250.052+112.17+248.256+114.491+246.394+116.758Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M238.811+144.06C228.837+136.83+234.491+145.793+235.344+145.793C238.469+145.793+239.786+134.961+240.544+137.993C242.872+147.305+244.279+148.024+238.811+144.06Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M246.178+145.793C246.178+144.546+248.712+140.132+249.211+143.626C249.506+145.688+248.861+149.267+250.945+145.793C251.511+144.85+252.245+141.659+252.245+142.76C252.245+152.614+246.532+140.593+253.545+140.593C253.669+140.593+253.04+143.988+253.545+144.493C253.758+144.706+263.675+142.598+263.946+142.326"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M235.127+157.711C236.009+156.829+236.814+153.336+235.777+154.027C233.242+155.717+229.914+162.924+235.127+157.711Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M235.777+157.494C237.125+165.584+238.995+163.069+240.544+159.661C241.446+157.676+245.259+146.869+244.444+150.127C241.002+163.897+253.671+156.874+262.212+154.027"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M237.727+178.296C244.351+192.132+230.018+189.398+241.411+191.297C241.792+191.36+246.47+193.171+246.611+193.03C248.998+190.643+246.718+183.839+247.045+180.896C247.253+179.024+247.478+173.379+247.478+175.262C247.478+178.666+236.257+175.226+237.727+178.296Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M236.644+211.882C237.178+217.702+236.21+223.906+236.21+229.867C236.21+230.878+236.21+233.911+236.21+232.9C236.21+231.696+235.601+227.294+237.51+228.566C239.19+229.686+242.534+233.206+244.878+232.033C247.781+230.582+243.776+213.297+243.578+209.932C243.518+208.912+243.811+205.896+244.011+206.898C245.166+212.673+241.343+211.665+236.644+211.665C236.049+211.665+236.586+211.256+236.644+211.882Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M237.944+246.985C233.29+258.739+245.381+267.499+250.511+262.369C250.89+261.991+249.854+260.621+249.645+260.202C247.878+256.668+246.178+253.582+246.178+249.368C246.178+246.768+246.688+239.018+246.178+241.568C244.735+248.78+240.735+239.934+237.944+246.985Z"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M284.314+249.802C284.314+253.55+280.061+243.213+280.414+243.301C284.934+244.431+288.83+245.992+292.982+248.068C294.207+248.681+298.252+249.368+296.882+249.368C293.266+249.368+287.567+250.229+291.681+242.001C292.499+240.367+295.242+236.8+293.415+236.8C291.867+236.8+280.176+235.696+281.281+236.8C282.896+238.416+285.505+234.444+287.781+234.634C288.122+234.662+294.41+236.32+293.848+234.634C292.581+230.833+284.642+223.799+288.648+223.799C290.819+223.799+300.848+224.391+294.282+219.466C291.629+217.476+287.128+227.519+285.614+227.266C281.625+226.602+278.405+219.19+278.68+219.466C285.309+226.094+296.969+220.957+296.448+220.333C292.217+215.255+294.481+206.514+294.282+206.465C291.393+205.742+290.092+217.588+290.815+214.699C291.221+213.073+295.283+198.843+292.982+206.898C290.792+214.56+291.248+200.345+291.248+199.531C291.248+198.199+289.28+201.332+288.214+202.131C285.797+203.944+282.783+206.607+283.447+209.932C283.681+211.1+284.196+207.65+284.314+206.465C284.779+201.82+277.026+197.638+279.114+193.464C283.379+184.933+295.881+198.365+293.848+200.398C291.31+202.936+288.299+185.055+298.182+189.997C301.661+191.736+295.148+201.264+295.148+201.264C295.148+201.264+297.136+183.303+294.715+174.829C293.449+170.399+288.435+185.99+284.314+183.93C280.737+182.141+295.129+175.598+294.715+173.529"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M281.281+147.96C281.281+147.96+293.328+148.232+296.882+152.294C298.843+154.535+293.784+163.483+293.415+160.528C292.368+152.155+294.677+146.715+292.982+137.559C292.826+136.718+290.771+134.504+290.815+134.526C292.614+135.425+296.448+136.692+296.448+136.692C296.448+136.692+288.672+133.273+286.914+129.759C286.566+129.063+287.314+128.214+287.781+127.592C291.533+122.589+296.358+112.162+286.481+107.223"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M366.221+238.967C364.74+238.967+367.521+238.967+367.521+238.967C364.337+239.763+359.95+237.586+360.587+233.767C361.33+229.306+371.133+231.934+372.721+227.7C374.209+223.731+359.695+227.675+361.887+229.867C364.335+232.315+373.014+230.363+371.421+228.133C370.445+226.767+368.151+217.299+366.654+217.299C361.005+217.299+358.245+222.879+363.187+222.499C373.802+221.683+367.43+214.265+360.587+214.265"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M354.52+202.998C357.092+202.998+368.821+200.824+368.821+200.398C368.821+198.321+358.94+197.622+359.72+192.164C360.099+189.514+367.954+189.624+367.954+185.23C367.954+181.096+346.286+202.487+346.286+193.03C346.286+191.32+346.089+190.414+347.153+189.563C352.276+185.465+347.156+192.307+350.186+191.297C356.203+189.291+357.461+179.07+361.454+183.063C363.882+185.491+351.486+183.896+351.486+180.463C351.486+174.905+362.626+172.967+354.52+164.861C353.949+164.291+359.72+187.601+359.72+176.129"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
        <path
          className="stroke-lemon-900 group-hover:stroke-lemon-300"
          stroke-width="3"
          d="M361.02+159.661C356.926+159.661+344.364+171.888+347.586+157.928C347.981+156.215+350.12+153.283+348.453+152.727C345.141+151.623+335.428+157.061+338.919+157.061C341.474+157.061+355.614+148.979+353.653+145.793C346.684+134.469+338.919+140.933+338.919+121.091"
          stroke-linecap="round"
          opacity="1"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
export default Logo_1;
